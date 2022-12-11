import React, { useEffect, useRef } from "react";
import "./MouseFollow.scss";

const MouseFollow = () => {
  const cursorRef = useRef();


  useEffect(() => {
    document.addEventListener("mousemove", function (e) {
      move(e);
    });
 
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

  return (
    <div>
      {" "}
      <div className="follow" ref={cursorRef}></div>
    </div>
  );
};

export default MouseFollow;
