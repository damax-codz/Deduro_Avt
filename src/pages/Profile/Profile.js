import { Box } from "@mui/material";
import React, { useState, useRef, useLayoutEffect } from "react";
import { useNavigate } from "react-router";
import Exit from "../../component/Exit/Exit";
import "./Profile.scss";
import gsap from "gsap";
import Tobi from "./../../component/assets/images/tobi6.jpeg";
import Tobitwo from "./../../component/assets/images/tobi9.JPG";
import Award from "./../../component/assets/images/tobi10.JPG";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MouseFollow from "../../component/MouseFollow/MouseFollow";
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
      })
        .to(img.current, {
          scale: 1.2,
          duration: 5,
          scrollTrigger: {
            trigger: ".hero_image",
            start: "top top",
            end: "center top",
            scrub: 2,
          },
        })
        .to(textscroll.current, {
          xPercent: -25,
          duration: 10,
          scrollTrigger: {
            trigger: ".text_item",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            // markers: true,
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
      <MouseFollow />
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

          <Box className="text_scroll">
            <h2 className="text_item" ref={textscroll}>
              Adeduro Tobiloba <span>Avt</span> Adeduro Tobiloba{" "}
              <span>Avt</span>Adeduro Tobiloba
            </h2>
          </Box>
          <Box className="profile_intro">
            <div className="intro_image_container">
              <img src={Tobitwo} alt="model" className="intro_image" />
            </div>
            <div className="intro_text_container">
              <div className="text_one">
                <h2  className="text_title">Est saepe, ipsam eveniet suscipit quidem, ratione</h2>
                <p>— dolor sit amet consectetur adipisicing elit. Deleniti deserunt harum cumque, quo aut nobis rerum officia velit temporibus distinctio beatae accusamus, necessitatibus enim expedita? Sequi ratione at harum repellendus animi et eos voluptatem, sint aspernatur molestias. Est saepe, ipsam eveniet suscipit quidem, ratione quia animi quae</p>
              </div>
              <div className="text_one">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti deserunt harum cumque, quo aut nobis rerum officia velit temporibus distinctio beatae accusamus, necessitatibus enim expedita? Sequi ratione at harum repellendus animi et eos voluptatem, sint aspernatur molestias. Est saepe, ipsam eveniet suscipit quidem, ratione quia animi</p>
              </div>
            </div>
          </Box>

          <Box className="award_container">
            <img src={Award} alt="model" />
            <p>DEDURO X xAWARD DATE</p>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Profile;
