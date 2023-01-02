import { Box } from "@mui/material";
import React, { useState, useRef, useLayoutEffect } from "react";
import { useNavigate } from "react-router";
import Exit from "../../component/Exit/Exit";
import "./Profile.scss";
import gsap from "gsap";
import Tobi from "./../../component/assets/images/tobi3.JPG";
import Tobitwo from "./../../component/assets/images/tobi9.JPG";
import Award from "./../../component/assets/images/tobi10.JPG";
import work from "./../../component/assets/images/tobi6.jpeg";
import GtLogo from "./../../component/assets/images/gt.png";
import gtone from "./../../component/assets/images/gtco1.JPG";
import gttwo from "./../../component/assets/images/gtco2.JPG";
import gtfour from "./../../component/assets/images/gtco4.JPG";
import balaone from "./../../component/assets/images/bala1.JPG";
import balatwo from "./../../component/assets/images/bala2.JPG";
import balathree from "./../../component/assets/images/bala3.JPG";
import chillone from "./../../component/assets/images/chill1.JPG";
import chilltwo from "./../../component/assets/images/chill2.JPG";
import chillthree from "./../../component/assets/images/chill3.JPG";
import chillfour from "./../../component/assets/images/chill4.JPG";
import balaLogo from "./../../component/assets/images/bala_logo.png";
import liptonone from "./../../component/assets/images/lipton1.JPG";
import liptontwo from "./../../component/assets/images/lipton2.JPG";
import liptonthree from "./../../component/assets/images/lipton3.JPG";
import liptonfour from "./../../component/assets/images/lipton4.JPG";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MouseFollow from "../../component/MouseFollow/MouseFollow";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
gsap.registerPlugin(ScrollTrigger);

const Profile = () => {
  const [exitAnim, setAnim] = useState(false);
  const navigate = useNavigate();
  const body = useRef();
  const textscroll = useRef();
  const img = useRef();
  const workRef = useRef();
  const tl = gsap.timeline();

  const gtcoImages = [
    { name: gtone, style: "md" },
    { name: gtfour, style: "lg" },
    { name: gttwo, style: "sm" },
  ];
  const balaImages = [
    { name: balaone, style: "md" },
    { name: balatwo, style: "lg" },
    { name: balathree, style: "sm" },
  ];
  const chillImages = [
    { name: chillone, style: "md" },
    { name: chilltwo, style: "lg" },
    { name: chillthree, style: "sm" },
    { name: chillfour, style: "lg" },
  ];
  const liptonImages = [
    { name: liptonthree, style: "sm" },
    { name: liptonone, style: "md" },
    { name: liptontwo, style: "lg" },
    { name: liptonfour, style: "lg" },
  ];

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
        .from(
          img.current,
          {
            scale: 1.1,
            duration: 1,
          },
          "<"
        )
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
            // pin:true,
            // pinSpacer:false,
          },
        });
    });
    return () => {
      ctx.revert();
    };
  }, []);

  useLayoutEffect(() => {
    if (window.innerWidth > 800) {
      tl.to(workRef.current, {
        xPercent: -85,
        duration: 20,
        scrollTrigger: {
          trigger: workRef.current,
          start: "50% 50%",
          end: "+=4000px",
          scrub: 10,
          // markers:true,
          pin: true,
        },
      });
    } else {
    }
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
            <div
              className="nav_text"
              onClick={() => {
                setAnim(true);
                setTimeout(() => navigate("/Deduro_Avt/gallery"), 3500);
                gsap.to(body.current, { opacity: 0, duration: 3.5 });
              }}
            >
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
                <h2 className="text_title">
                  is an event host, fashion model and consultant
                </h2>
                <p>
                  — My first modeling appearance was at age 14 when I had to
                  model for a teenage local magazine. And by stories from my
                  parents, I dress up myself from when I was 3 years of age.
                </p>
              </div>
              <div className="text_one">
                <p>
                  Déduro Avt hosted the red carpet for the 2021/2022 NAPES
                  dinner and awards night and was also the Welfare director for
                  the society of Industrial Maintenance Engineering Students,
                  Yabatech.
                </p>
              </div>
            </div>
          </Box>

          <Box className="award_container">
            <img src={Award} alt="model" />
            <p>DEDURO X NAPES dinner and awards night 2022</p>
          </Box>

          <Box className="inspiration">
            <p className="inspiration_text">
              "Modeling is something that's within and I knew what I could do
              with it from a very young age. From styling my outfits myself to
              sorting for clothes that gives certain definition to the mood I
              was in
            </p>
            <p className="inspiration_story">
              Déduro Avt was a nominee and became the winner of the most
              fashionable male student in the whole of Engineering department,
              Yabatech, 2022. He also won the star style awards at around 2020
              held in Festac town, Lagos.
            </p>
          </Box>

          <Box className="work_container">
            {window.innerWidth > 800 ? (
              <Box className="work" ref={workRef}>
                <Box className="box_one">
                  <div className="box_one_image">
                    <img src={work} alt="model" />
                    <p>Deduro AVT 14 August 2022 by Tfocus</p>
                  </div>

                  <div className="box_one_text">
                    <p className="work_start">WORK</p>
                    <p className="work_center">
                      with a Higher National Diploma degree and has worked with
                      Tfocus photography, Jaykay photography just to mention a
                      few.
                    </p>
                    <div className="work_end">
                      <button>
                        <ArrowRightAltIcon />
                      </button>
                      Here are some featured projects, Keep scrolling to see.
                    </div>
                  </div>
                </Box>

                <Box className="category">
                  <div className="category_title">
                    <p>GTCO</p>
                    <img src={GtLogo} alt="gt" />
                  </div>

                  <div className="category_images">
                    {gtcoImages.map((item, index) => {
                      return (
                        <div
                          className={item.style}
                          key={index}
                          style={{ backgroundImage: `url("${item.name}")` }}
                        ></div>
                      );
                    })}
                  </div>
                </Box>

                <Box className="category">
                  <div className="category_title">
                    <p>BaLacLaVa</p>
                    <img src={balaLogo} alt="gt" />
                  </div>

                  <div className="category_images">
                    {balaImages.map((item, index) => {
                      return (
                        <div
                          className={item.style}
                          key={index}
                          style={{ backgroundImage: `url("${item.name}")` }}
                        ></div>
                      );
                    })}
                  </div>
                </Box>

                <Box className="category">
                  <div className="category_title">
                    <p>ANALOG</p>
                    {/* <img src={GtLogo} alt="gt" /> */}
                  </div>

                  <div className="category_images">
                    {chillImages.map((item, index) => {
                      return (
                        <div
                          className={item.style}
                          key={index}
                          style={{ backgroundImage: `url("${item.name}")` }}
                        ></div>
                      );
                    })}
                  </div>
                </Box>

                <Box className="category">
                  <div className="category_title">
                    <p>LIPTON</p>
                    {/* <img src={LiptonLogo} alt="gt" /> */}
                  </div>

                  <div className="category_images">
                    {liptonImages.map((item, index) => {
                      return (
                        <div
                          className={item.style}
                          key={index}
                          style={{ backgroundImage: `url("${item.name}")` }}
                        ></div>
                      );
                    })}
                  </div>
                </Box>
              </Box>
            ) : (
              <Box className="work mobile">
                <Box className="box_one">
                  <div className="box_one_image">
                    <img src={work} alt="model" />
                    <p>Deduro AVT 14 August 2022 by Tfocus</p>
                  </div>

                  <div className="box_one_text">
                    <p className="work_start">WORK</p>
                    <p className="work_center">
                    with a Higher National Diploma degree and has worked with
                      Tfocus photography, Jaykay photography just to mention a
                      few.
                    </p>
                    <div className="work_end">
                      <button>
                        <ArrowRightAltIcon />
                      </button>
                      Here are some featured projects, Keep scrolling to see.
                    </div>
                  </div>
                </Box>

                <Box className="work_list">
                  <p> <a href="/Deduro_Avt/gallery">GTCO</a></p>
                  <p>  <a href="/Deduro_Avt/gallery">BALACLAVA</a></p>
                  <p>  <a href="/Deduro_Avt/gallery">ANALOG</a></p>
                  <p>  <a href="/Deduro_Avt/gallery">LIPTON</a></p>
                
                </Box>
              </Box>
            )}
          </Box>
          <Box className="footer">
            <button
              onClick={() => {
                setAnim(true);
                setTimeout(() => navigate("/Deduro_Avt/credit"), 3500);
                gsap.to(body.current, { opacity: 0, duration: 3.5 });
              }}
            >
              CREDIT
            </button>
            <p>
              Thank <span>you!</span>
            </p>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Profile;
