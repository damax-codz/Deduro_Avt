import gsap from "gsap";
import React, { useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import Exit from "../../component/Exit/Exit";
import MouseFollow from "../../component/MouseFollow/MouseFollow";
import "./Gallery.scss";

import galleryone from "./../../component/assets/images/chill3.JPG";
import gallerytwo from "./../../component/assets/images/ai1.png";
import gallerythree from "./../../component/assets/images/chill5.JPG";
import galleryfour from "./../../component/assets/images/chill1.JPG";
import galleryfive from "./../../component/assets/images/tobi1.JPG";
import gallerysix from "./../../component/assets/images/gallery6.JPG";
import galleryseven from "./../../component/assets/images/tobi4.jpeg";
import galleryeight from "./../../component/assets/images/gallery8.JPG";
import gallerynine from "./../../component/assets/images/gallery9.JPG";
import galleryten from "./../../component/assets/images/gallery10.JPG";
import galleryeleven from "./../../component/assets/images/gallery11.JPG";
import gallerytwelve from "./../../component/assets/images/gallery12.JPG";
import gallerythirteen from "./../../component/assets/images/gallery13.JPG";
import galleryfourteen from "./../../component/assets/images/tobi9.JPG";
import galleryfifteen from "./../../component/assets/images/gallery15.JPG";

import gallerysecondone from "./../../component/assets/images/bala1.JPG";
import gallerysecondtwo from "./../../component/assets/images/bala2.JPG";
import gallerysecondthree from "./../../component/assets/images/bala3.JPG";
import gallerysecondfour from "./../../component/assets/images/tobi7.JPG";
import gallerysecondfive from "./../../component/assets/images/lipton3.JPG";
import gallerysecondsix from "./../../component/assets/images/lipton1.JPG";
import gallerysecondseven from "./../../component/assets/images/gallery21.JPG";
import gallerysecondnine from "./../../component/assets/images/gallery24.JPG";
import gallerysecondten from "./../../component/assets/images/tobi12.JPG";
import gallerysecondeleven from "./../../component/assets/images/ai2.JPG";
import gallerysecondtwelve from "./../../component/assets/images/ai3.JPG";

const Gallery = () => {
  const [exitAnim, setAnim] = useState(false);
  const navigate = useNavigate();
  const body = useRef();

  function changeAnim() {
    setAnim(false);
  }

  const galleryImages = [
    { name: gallerysecondeleven, style: "lg panel" },
    { name: galleryfive, style: "lg panel" },
    { name: galleryone, style: "lg panel" },
    { name: gallerytwo, style: "md panel" },
    { name: gallerythree, style: "sm panel" },
    { name: galleryfour, style: "sm panel" },
    { name: gallerysix, style: "md panel" },
    { name: gallerysecondtwelve, style: "md panel" },
    { name: galleryseven, style: "sm panel" },
    { name: galleryeight, style: "md panel" },
    { name: gallerynine, style: "md panel" },
    { name: galleryten, style: "sm panel" },
    { name: galleryeleven, style: "lg panel" },
    { name: gallerytwelve, style: "sm panel" },
    { name: gallerythirteen, style: "md panel" },
    { name: galleryfourteen, style: "sm panel" },
    { name: galleryfifteen, style: "sm panel" },
    { name: gallerysecondfive, style: "lg panel" },
    { name: gallerysecondone, style: "lg panel" },
    { name: gallerysecondtwo, style: "md panel" },
    { name: gallerysecondthree, style: "sm panel" },
    { name: gallerysecondfour, style: "sm panel" },
    { name: gallerysecondsix, style: "md panel" },
    { name: gallerysecondseven, style: "sm panel" },
    { name: gallerysecondnine, style: "md panel" },
  ];

  const tl = gsap.timeline();

  useLayoutEffect(() => {
    if (window.innerWidth > 800) {
      tl.to(".gallery_container", {
        xPercent: -185,
        ease: "P]oower4.inOut",
        scrollTrigger: {
          trigger: ".gallery_container",
          scrub: 2,
          start: "top 110px",
          end: "+=3500",
          pin: true,
          // markers: true,
        },
      });
      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflowX = "hidden";
    }
  }, []);
  return (
    <>
      <Exit exitAnim={exitAnim} changeAnim={changeAnim} />
      <MouseFollow />
      <div className="gallery_page" ref={body}>
        <div className="home_nav">
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
              setTimeout(() => navigate("/Deduro_Avt/profile"), 3500);
              gsap.to(body.current, { opacity: 0, duration: 3.5 });
            }}
          >
            profile
          </div>
        </div>

        <div className="gallery_container">
          <div className="container_text panel">
            <p className="text_one">
              This archive contains video clips, art and pictures related to
              Deduro and his work, respective owners of each piece of work have
              been credited. Contact us for content removal
            </p>
            <p className="text_two">
              "earum doloribus facere eius assumenda eaque, aliquam soluta
              consequuntur"
            </p>
            <button
              onClick={() => {
                setAnim(true);
                setTimeout(() => navigate("/Deduro_Avt/credit"), 3500);
                gsap.to(body.current, { opacity: 0, duration: 3.5 });
              }}
            >
              CREDIT
            </button>
          </div>

          <div className="container_images ">
            {galleryImages.map((item, index) => {
              return (
                <div
                  className={item.style}
                  key={index}
                  style={{ backgroundImage: `url("${item.name}")` }}
                ></div>
              );
            })}

            <div className="go_home">
              <p>
                the <br /> End
              </p>

              <button
                onClick={() => {
                  setAnim(true);
                  setTimeout(() => navigate("/Deduro_Avt/home"), 3500);
                  gsap.to(body.current, { opacity: 0, duration: 3.5 });
                }}
              >
                Go to Home
              </button>
            </div>

            <div
              className="panel sm"
              style={{ backgroundImage: `url("${gallerysecondten}")` }}
            ></div>
          </div>
        </div>

        {/* <div className="extra"></div> */}
      </div>
    </>
  );
};

export default Gallery;
