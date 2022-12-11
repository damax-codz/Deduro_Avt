import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./Home.scss";
import Box from "@mui/material/Box";
import gsap from "gsap";
import Tobi from "./../../component/assets/images/tobi4.jpeg";
import profile from "./../../component/assets/images/tobi5.jpeg";
import SplitText from "gsap-trial/SplitText";
import Exit from "../../component/Exit/Exit";
import { useNavigate } from "react-router";

gsap.registerPlugin(SplitText);

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
    document.addEventListener("mousemove", function (e) {
      move(e);
    });
    // if (window.innerWidth < 900) {
    //   document.body.style.overflowY = "scroll";
    // } else {
    //   document.body.style.overflow = "hidden";
    // }

    return () => {
      document.body.style.overflowY = "scroll ";
    };
  }, []);

  // Cursor follower
  function isTouchDevice() {
    try {
      document.createEvent("TouchEvent");
      return true;
    } catch (e) {
      return false;
    }
  }

  const move = (e) => {
    try {
      var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
      var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
    } catch (e) {}

    cursorRef.current.style.display = "flex";
    cursorRef.current.style.left = x + "px";
    cursorRef.current.style.top = y + "px";

    const interactable = e.target.closest(".nav_text");
    const intracting = interactable !== null;
    const interactable2 = e.target.closest(".btn_container");
    const intracting2 = interactable2 !== null;
    animateTrailer(intracting, intracting2);
  };

  const animateTrailer = (intracting, intracting2) => {
    intracting2 || intracting
      ? (cursorRef.current.style.transform = "scale(2)")
      : (cursorRef.current.style.transform = "scale(1)");
    intracting2 || intracting
      ? (cursorRef.current.style.zIndex = "-10")
      : (cursorRef.current.style.zIndex = "10");

    // intracting2 ? cursorRef.current.innerHTML = `
    // <img src="./assets/north_east_FILL0_wght400_GRAD0_opsz48.svg" alt="">` : cursorRef.current.innerHTML =  ''
    // const keyFrame = intracting ? { transform :`translate(${x}px, ${y}px) scale(${intracting ? 4 : 1})`} : { transform :`translate(${x}px, ${y}px) scale(${intracting2 ? 5 : 1})`}
    // cursorRef.current.animate(keyFrame, {
    //     duration: 1000,
    //     fill: "forwards"
    // })
  };

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
      <div className="home_page" ref={body}>
        <div className="follow" ref={cursorRef}></div>
        <div className="page_container">
          <Box className="home_nav">
            <div
              className="nav_text"
              onClick={() => {
                setAnim(true);
                setTimeout(() => navigate("/profile"), 3500);
                gsap.to(body.current,{ opacity:0,duration:3.5 })
              }}
            >
              profile
            </div>
            <div className="nav_text" onClick={() => setAnim(true)}>
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime, odio!
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
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
                <button>Book</button>
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
