import { React, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./Gsap.scss";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Tobi from "../../component/assets/images/tobi4.jpeg";
import Tobisec from "../../component/assets/images/tobi6.jpeg";
import CSSRulePlugin from "gsap/CSSRulePlugin";

gsap.registerPlugin(CSSRulePlugin);

const Gsap = () => {
  const img = useRef();
  const img2 = useRef();
  const tl = gsap.timeline();
  const navigate = useNavigate();
  const imageReveal = CSSRulePlugin.getRule(".img_container:after");

  // const imgcover = document.querySelector("img_container")
  // const imageReveal = window.getComputedStyle(imgcover, '::after')

  useEffect(() => {
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      navigate("/Deduro_Avt/home");
    }, 15000);

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  useLayoutEffect(() => {
    gsap.context(() => {
      tl.to(".mun", { yPercent: -2100, duration: 8, ease: "none" })
        .to(".sup", { y: -70, duration: 0.5, delay: 7.6 }, "<")
        .to(".wrapper", { y: -20, opacity: "0", display: "none" }, ">")
        .to(".img_container", { display: "flex", delay: 0.5 }, ">")
        .to(
          imageReveal,
          { height: "0%", ease: "power2.in", duration: 1.2 },
          ">"
        )
        .from(
          img.current,
          { scale: 1.4, ease: "power2.inOut", duration: 1.2 },
          "<0.8"
        )
        .to(
          img2.current,
          { yPercent: -100, ease: "power2.in", duration: 1.1 },
          ">"
        )
        .to(
          img.current,
          { yPercent: -100, ease: "power2.in", duration: 1.1, zIndex: 10 },
          "<"
        )
        .to(
          imageReveal,
          {
            bottom: 0,
            top: "auto",
            height: "100%",
            ease: "power2.in",
            duration: 1.1,
          },
          ">"
        )
        // .to(
        //   imageReveal,
        //   { height: "100%", ease: "power2.in", duration: 1.3 },
        //   ">"
        // )
        .to(".name", { opacity: 0 }, "<0.8");
    });
  }, []);
  return (
    <div className="container">
      <div className="wrapper">
        <div>
          <p>'</p>
        </div>
        <div>
          <p className="sup">0</p>
          <p className="sup">1</p>
        </div>
        <div className="mun">
          <p className="num">00</p>
          <p className="num">05</p>
          <p className="num">15</p>
          <p className="num">22</p>
          <p className="num">26</p>
          <p className="num">32</p>
          <p className="num">45</p>
          <p className="num">47</p>
          <p className="num">52</p>
          <p className="num">56</p>
          <p className="num">59</p>
          <p className="num">60</p>
          <p className="num">65</p>
          <p className="num">70</p>
          <p className="num">76</p>
          <p className="num">82</p>
          <p className="num">85</p>
          <p className="num">88</p>
          <p className="num">90</p>
          <p className="num">93</p>
          <p className="num">95</p>
          <p className="num">00</p>
        </div>
      </div>

      <Box className="name">
        <p>Deduro</p>
        <p>Avt</p>
      </Box>

      <Box className="img_container">
        <img ref={img2} src={Tobisec} alt="tobi" className="img_two"></img>
        <img ref={img} src={Tobi} alt="tobi" className="img_one"></img>
      </Box>
    </div>
  );
};

export default Gsap;
