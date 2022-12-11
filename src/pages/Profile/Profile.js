import { Box } from "@mui/material";
import React, { useState, useRef, useLayoutEffect } from "react";
import { useNavigate } from "react-router";
import Exit from "../../component/Exit/Exit";
import "./Profile.scss";
import gsap from "gsap";
import Tobi from "./../../component/assets/images/tobi7.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Profile = () => {
  const [exitAnim, setAnim] = useState(false);
  const navigate = useNavigate();
  const body = useRef();
  const textscroll = useRef();
  const img = useRef();
  const tl = gsap.timeline();

  function changeAnim() {
    setAnim(false);
  }

  useLayoutEffect(() => {
    document.body.style.overflowX = "hidden";
    let ctx = gsap.context(() => {
      tl.from(body.current, {
        opacity: 0,
        duration: 1,
      }).to(img.current, {
        scale: 1.2,
        duration:5,
        scrollTrigger: {
          trigger: ".hero_image",
          start: "top top",
          end:"center top",
          scrub: 2,
        },
      }).to(textscroll.current, {
        x: `-${textscroll.current.offsetWidth/3}` ,
        duration:10,
        scrollTrigger: {
          trigger: textscroll.current,
          start: "top bottom",
          end:"bottom top", 
          scrub: 1,
        //   pin:true
        },
      });
    });
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <Exit exitAnim={exitAnim} changeAnim={changeAnim} />
      <div className="profile_page" ref={body}>
        <div className="page_container">
          <Box className="home_nav">
            <div
              className="nav_text"
              onClick={() => {
                setAnim(true);
                setTimeout(() => navigate("/Deduro_Avt/home"), 3500);
                gsap.to(body.current, { opacity: 0, duration: 3.5 });
              }}
            >
              close
            </div>
            <div className="nav_text" onClick={() => setAnim(true)}>
              gallery
            </div>
          </Box>

          <Box className="hero_image">
            <img src={Tobi} alt="model" ref={img} />
            <p className="hero_title">DEDURO AVT.</p>
          </Box>

          <Box className="text_scroll" ref={textscroll}>
          Adeduro Tobiloba <span>Avt</span> Adeduro Tobiloba <span>Avt</span>Adeduro Tobiloba 
          </Box>
          <Box className="extra">

          </Box>
        </div>
      </div>
    </>
  );
};

export default Profile;
