import React, { useEffect, useRef } from "react";
import "./Exit.scss";
import gsap from "gsap";

const Exit = (props) => {
  const tl = gsap.timeline();
  const exit = useRef();
  const text = useRef();

  useEffect(() => {
    Anim();
  }, [props.exitAnim]);

  function Anim() {
    props.exitAnim &&
      tl
        .to(exit.current, {
          height: "100vh",
          duration: 1,
          ease: "power2.in",
        })
       
        .to(".text" , {
            opacity:1,duration:0.5,stagger:0.3
        },">")
        .to(".text" , {
          opacity:0,duration:0.3,
      },">")
        .to(exit.current, {
          top: 0,
          bottom: "auto",
          height: "0vh",
          duration: 1,
          ease: "power2.in",
          delay: 0.5,
        },"<")
        .to(exit.current, { top: "auto", bottom: 0 })
        .to(".text" , {
          opacity:0,duration:0.5
      },">")
    props.changeAnim();
  }

  return (
    <div className="exit" ref={exit}>
        
      <div className="wrapper">
        <span className="text" ref={text}>A</span>
        <span className="text">V</span>
        <span className="text">T</span>
      </div>
    </div>
  );
};

export default Exit;
