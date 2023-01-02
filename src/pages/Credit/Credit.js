import React, { useRef } from "react";
import "./Credit.scss";
import maker from "./../../component/assets/images/maker.JPG";
import { useState } from "react";
import { useNavigate } from "react-router";
import Exit from "../../component/Exit/Exit";
import MouseFollow from "../../component/MouseFollow/MouseFollow";
import gsap from "gsap";

const Credit = () => {
  const [exitAnim, setAnim] = useState(false);
  const navigate = useNavigate();
  const body = useRef();
  function changeAnim() {
    setAnim(false);
  }
  return (
    <>
      <Exit exitAnim={exitAnim} changeAnim={changeAnim} />
      <MouseFollow />
      <div className="credit_container" ref={body}>
        <div className="top">
          <button
            onClick={() => {
              setAnim(true);
              setTimeout(() => navigate("/Deduro_Avt/home"), 3500);
              gsap.to(body.current, { opacity: 0, duration: 3.5 });
            }}
          >
            Close
          </button>
        </div>
        <div className="credit_wrapper">
          <div className="left">
            <div className="makers">
              <p>who made this site ?</p>
              <p>
                {" "}
                <a href="https://github.com/damax-codz" target="_blank">
                  bhadmus damilola{" "}
                </a>
              </p>
              <p>
                {" "}
                <a href="https://github.com/l00p-studi0" target="_blank">
                  loop studio{" "}
                </a>
              </p>
            </div>

            <div className="font">
              <p>typesetting</p>
              <p>
                Type for this website was set in Fraunces, Fondamento and HK
                Grotesk
              </p>
            </div>

            <div></div>
          </div>

          <div className="right">
            <img src={maker} alt="maker" />
            <div className="credit">
              <p>we used work from</p>
              <p>
                {" "}
                <a href="https://twitter.com/seyi__xo" target="_blank">
                  Fejká
                </a>{" "}
                <a href="https://www.seyi.dev/" target="_blank">
                  seyi portfolio works
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Credit;
