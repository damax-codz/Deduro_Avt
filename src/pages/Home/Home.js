import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./Home.scss";
import Box from "@mui/material/Box";
import gsap from "gsap";
import Tobi from "./../../component/assets/images/tobi11.JPG";
import profile from "./../../component/assets/images/tobi5.jpeg";
import Exit from "../../component/Exit/Exit";
import MouseFollow from "../../component/MouseFollow/MouseFollow";
import { useNavigate } from "react-router";


const Home = () => {
  const cursorRef = useRef();
  const imgRef = useRef();
  const imgRef2 = useRef();
  const body = useRef();
  const [exitAnim, setAnim] = useState(false);
  const tl = gsap.timeline();
  const navigate = useNavigate();

  function changeAnim() {
    setAnim(false);
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";
    if (window.innerWidth > 800) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }

    return () => {
      document.body.style.overflowY = "scroll ";
    };
  }, []);

  //Gsap animations on load
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.from(body.current, {
        opacity: 0,
        duration: 1,
      })
        .from(
          [imgRef.current, imgRef2.current],
          { scale: 1.1, opacity: 0, duration: 1 },
          ">"
        )
        .from(".description", { yPercent: 130, duration: 1, stagger: 0.5 }, "<")
        .from(".text_one", { yPercent: 200, duration: 1 }, "<");
    });
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
   

      <Exit exitAnim={exitAnim} changeAnim={changeAnim} />
      <MouseFollow />
      <div className="home_page" ref={body}>
        <div className="follow" ref={cursorRef}></div>
        <div className="page_container">
          <Box className="home_nav">
            <div
              className="nav_text"
              onClick={() => {
                setAnim(true);
                setTimeout(() => navigate("/profile"), 3500);
                gsap.to(body.current, { opacity: 0, duration: 3.5 });
              }}
            >
              profile
            </div>
            <div
              className="nav_text"
              onClick={() => {
                setAnim(true);
                setTimeout(() => navigate("/gallery"), 3500);
                gsap.to(body.current, { opacity: 0, duration: 3.5 });
              }}
            >
              gallery
            </div>
          </Box>

          <Box className="page_body">
            <div className="left">
              <Box className="hero_image">
                <Box className="image_wrapper">
                  <div className="image" ref={imgRef}>
                    {" "}
                  </div>
                </Box>

                <Box className="image_text">
                  <div>
                    <p className="text_one">Deduro_Avt</p>
                  </div>

                  <div>
                    <p className="text_two">
                      Déduro Avt is an event host, fashion model and consultant
                    </p>
                  </div>
                </Box>
              </Box>

              <Box className="description_container">
                <Box className="description_one">
                  <p className="description">commercial model &</p>
                </Box>
                <Box className="description_one">
                  <p className="description">vocalist</p>
                </Box>
              </Box>

              <Box className="image_description ">
                <div className="image_description_wrapper ">
                  <p className="image_description_text">
                    {" "}
                   He has worked with Tfocus photography, Jaykay photography just to mention a few.

                  </p>
                  <Box className="image_description_image_container ">
                    <img
                      src={Tobi}
                      alt="model"
                      className="image_description_image "
                    />
                  </Box>
                </div>
              </Box>

              <Box className="btn_container">
                <button
                  onClick={() => {
                    setAnim(true);
                    setTimeout(() => navigate("/credit"), 3500);
                    gsap.to(body.current, { opacity: 0, duration: 3.5 });
                  }}
                >
                  Credits
                </button>
              </Box>
            </div>

            <Box className="profile_demo">
              <Box className="image_wrapper">
                <img src={profile} alt="Tobi" className="image" ref={imgRef2} />
              </Box>

              <div className="circle_text"></div>
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Home;
