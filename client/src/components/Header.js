import React, { useEffect } from "react";
import {
  scrollSvgColorTrans,
  scrollBgColorTrans,
  dotSwitch,
} from "../scripts/utils";

export default function Header() {
  useEffect(() => {
    const orgName = document.querySelector("#header .name");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        orgName.classList.add("active");
      } else {
        orgName.classList.remove("active");
      }
    });

    const nav = document.querySelector("#navigation");
    const openClose = document.querySelector("#navigation .open-close");

    openClose.addEventListener("click", () => {
      nav.classList.toggle("active");
    });

    dotSwitch();

    const bannerSvgColor = { r: 103, g: 208, b: 255 };
    const skillsSvgColor = { r: 197, g: 160, b: 255 };
    const projectsSvgColor = { r: 21, g: 255, b: 237 };

    const lightBlue = { r: 0, g: 157, b: 255 };
    const middleBlue = { r: 19, g: 69, b: 181 };
    const lightPurple = { r: 197, g: 160, b: 255 };
    const purple = { r: 158, g: 41, b: 221 };
    const cyan = { r: 0, g: 174, b: 181 };
    const darkCyan = { r: 0, g: 117, b: 160 };

    scrollBgColorTrans(
      "#navigation .open-close span",
      "#navigation .open-close",
      "#home #banner",
      "#home #skills-services",
      bannerSvgColor,
      skillsSvgColor
    );

    scrollBgColorTrans(
      "#navigation .open-close span",
      "#navigation .open-close",
      "#home #skills-services",
      "#home #projects",
      skillsSvgColor,
      projectsSvgColor
    );

    scrollSvgColorTrans(
      "#header .sub-ribbon .social svg path",
      "#header .sub-ribbon .social svg > g > g > rect:last-child",
      null,
      "#home #banner",
      "#home #skills-services",
      bannerSvgColor,
      skillsSvgColor
    );

    scrollSvgColorTrans(
      "#header .sub-ribbon .social svg path",
      "#header .sub-ribbon .social svg > g > g > rect:last-child",
      null,
      "#home #skills-services",
      "#home #projects",
      skillsSvgColor,
      projectsSvgColor
    );

    scrollSvgColorTrans(
      null,
      null,
      "#header .main-ribbon .logo svg defs linearGradient stop:first-child",
      "#home #banner",
      "#home #skills-services",
      lightBlue,
      lightPurple
    );

    scrollSvgColorTrans(
      null,
      null,
      "#header .main-ribbon .logo svg defs linearGradient stop:last-child",
      "#home #banner",
      "#home #skills-services",
      middleBlue,
      purple
    );

    scrollSvgColorTrans(
      null,
      null,
      "#header .main-ribbon .logo svg defs linearGradient stop:first-child",
      "#home #skills-services",
      "#home #projects",
      lightPurple,
      cyan
    );

    scrollSvgColorTrans(
      null,
      null,
      "#header .main-ribbon .logo svg defs linearGradient stop:last-child",
      "#home #skills-services",
      "#home #projects",
      purple,
      darkCyan
    );
  }, []);

  return (
    <header id="header">
      <div className="main-ribbon">
        <div className="logo">
          <a className="mark" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70.953"
              height="86.758"
              viewBox="0 0 70.953 86.758"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="0.59"
                  y1="0.609"
                  x2="0.193"
                  y2="0.151"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stopColor="#009dff" />
                  <stop offset="1" stopColor="#1345b5" />
                </linearGradient>
              </defs>
              <path
                className="a"
                d="M4168.769,110.452a25,25,0,0,1-7.834-5.354,25.4,25.4,0,0,1-5.256-7.909,25.387,25.387,0,0,1,0-19.45,26.307,26.307,0,0,1,2.033-3.827l-6.706-13.185c-.368.051-.735.093-1.095.121-.532.045-1.118.069-1.746.069h-7.783V75.075H4132v-49.4h16.165a20.113,20.113,0,0,1,10.562,2.91,17.075,17.075,0,0,1,7.389,9.737c.057.277.1.459.139.622a3.622,3.622,0,0,0,.164.493l.053.13v.34a3.313,3.313,0,0,1,.159.784q.03.363.09.725l.011.059v.06a5.86,5.86,0,0,1,.065.848V44.21a5.676,5.676,0,0,1-.065.839v.134l-.011.059c-.04.242-.07.475-.09.7a4.048,4.048,0,0,1-.159.8v.277l-.043.12a5.153,5.153,0,0,0-.288,1.08l-.008.065-.019.062a17.766,17.766,0,0,1-2.809,5.509,17.192,17.192,0,0,1-4.513,4.117,1.341,1.341,0,0,1-.135.106l4.824,9.549a25.464,25.464,0,0,1,5.288-3.143,24.108,24.108,0,0,1,23.4,2.322,25.352,25.352,0,0,1,5.19,4.876,26.422,26.422,0,0,1,3.692,6.164l.429,1.008h-9.605l-.209-.356a16.351,16.351,0,0,0-5.589-5.714,14.458,14.458,0,0,0-7.7-2.145,14.649,14.649,0,0,0-6.159,1.326,16.112,16.112,0,0,0-5.048,3.614,17.615,17.615,0,0,0-3.417,5.346,17.609,17.609,0,0,0,0,13.091,17.63,17.63,0,0,0,3.417,5.347,16.074,16.074,0,0,0,5.048,3.615,14.961,14.961,0,0,0,11.566.316,15.619,15.619,0,0,0,4.63-2.818,16.912,16.912,0,0,0,3.474-4.29,17.489,17.489,0,0,0,1.8-4.481H4177V84.025h25.759l.057.66q.067.745.1,1.418c.022.455.034.909.034,1.361,0,.63-.022,1.251-.068,1.845s-.114,1.184-.2,1.777a24.365,24.365,0,0,1-2.749,8.418,25.08,25.08,0,0,1-5.361,6.786,24.67,24.67,0,0,1-7.362,4.5,24.442,24.442,0,0,1-18.442-.34Zm-28.321-57.114h8.561a7.809,7.809,0,0,0,3.6-.836,9.492,9.492,0,0,0,2.867-2.25,11.6,11.6,0,0,0,1.953-3.234,9.974,9.974,0,0,0,0-7.478,11,11,0,0,0-1.946-3.225,9.761,9.761,0,0,0-2.873-2.224,7.8,7.8,0,0,0-3.6-.837h-8.561ZM4201.48,78.846Z"
                transform="translate(-4132 -25.676)"
              />
            </svg>
          </a>
          <h3 className="name">
            <span>Robert Gonzalez</span>
          </h3>
        </div>

        <nav id="navigation">
          <button className="open-close">
            <span></span>
            <span></span>
          </button>

          <ul id="main-menu">
            <li className="menu-link"></li>
          </ul>
        </nav>
      </div>

      <div className="sub-ribbon">
        <div className="social">
          <div className="github">
            <a href="https://github.com/bobbyg211">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="53"
                height="53"
                viewBox="0 0 53 53"
              >
                <defs>
                  <clipPath id="a">
                    <rect
                      className="a"
                      width="32.579"
                      height="31.775"
                      transform="translate(0 0)"
                    />
                  </clipPath>
                </defs>
                <g transform="translate(-36 -850)">
                  <g className="b" transform="translate(36 850)">
                    <rect className="e" width="53" height="53" rx="11" />
                    <rect
                      className="f"
                      x="1"
                      y="1"
                      width="51"
                      height="51"
                      rx="10"
                    />
                  </g>
                  <g transform="translate(46 861)">
                    <g className="c">
                      <path
                        className="d"
                        d="M16.289,0a16.291,16.291,0,0,0-5.148,31.747c.815.149,1.112-.354,1.112-.786,0-.386-.014-1.411-.022-2.77-4.531.984-5.487-2.184-5.487-2.184a4.309,4.309,0,0,0-1.809-2.382c-1.479-1.011.112-.991.112-.991a3.423,3.423,0,0,1,2.495,1.679,3.47,3.47,0,0,0,4.741,1.354,3.477,3.477,0,0,1,1.034-2.178C9.7,23.078,5.9,21.68,5.9,15.438a6.3,6.3,0,0,1,1.677-4.371,5.856,5.856,0,0,1,.159-4.311s1.368-.438,4.48,1.67a15.42,15.42,0,0,1,8.156,0c3.11-2.108,4.475-1.67,4.475-1.67a5.846,5.846,0,0,1,.162,4.311,6.287,6.287,0,0,1,1.675,4.371c0,6.258-3.809,7.635-7.438,8.038a3.888,3.888,0,0,1,1.106,3.017c0,2.177-.02,3.934-.02,4.468,0,.436.293.943,1.12.784A16.292,16.292,0,0,0,16.289,0"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <div className="twitter">
            <a href="https://twitter.com/theOGbobbyG">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="53"
                viewBox="0 0 54 53"
              >
                <defs></defs>
                <g transform="translate(-35 -917)">
                  <g className="a" transform="translate(35 917)">
                    <rect className="d" width="54" height="53" rx="11" />
                    <rect
                      className="b"
                      x="1"
                      y="1"
                      width="52"
                      height="51"
                      rx="10"
                    />
                  </g>
                  <g transform="translate(42 924)">
                    <rect className="b" width="40" height="40" />
                    <path
                      className="c"
                      d="M82.873,118.792a14.515,14.515,0,0,0,14.614-14.614c0-.222,0-.444-.015-.664a10.45,10.45,0,0,0,2.563-2.659,10.252,10.252,0,0,1-2.95.808,5.154,5.154,0,0,0,2.258-2.841,10.293,10.293,0,0,1-3.262,1.247,5.141,5.141,0,0,0-8.753,4.684,14.582,14.582,0,0,1-10.586-5.366,5.14,5.14,0,0,0,1.59,6.856A5.1,5.1,0,0,1,76,105.6v.065a5.138,5.138,0,0,0,4.121,5.035,5.128,5.128,0,0,1-2.319.088,5.142,5.142,0,0,0,4.8,3.567,10.306,10.306,0,0,1-6.379,2.2A10.459,10.459,0,0,1,75,116.485a14.541,14.541,0,0,0,7.873,2.3"
                      transform="translate(-67.49 -88.592)"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <div className="linkedin">
            <a href="https://www.linkedin.com/in/robert-d-gonzalez/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="53"
                height="53"
                viewBox="0 0 53 53"
              >
                <defs>
                  <clipPath id="a">
                    <rect className="a" width="27.985" height="28.317" />
                  </clipPath>
                </defs>
                <g transform="translate(-36 -984)">
                  <g className="b" transform="translate(36 984)">
                    <rect className="d" width="53" height="53" rx="11" />
                    <rect
                      className="e"
                      x="1"
                      y="1"
                      width="51"
                      height="51"
                      rx="10"
                    />
                  </g>
                  <g transform="translate(48 996.653)">
                    <g className="c">
                      <path
                        className="a"
                        d="M25.164,0H2.821A2.826,2.826,0,0,0,0,2.832V25.487a2.826,2.826,0,0,0,2.821,2.831H25.164a2.826,2.826,0,0,0,2.821-2.831V2.832A2.826,2.826,0,0,0,25.164,0M8.98,22.406H5.215V10.293H8.98ZM7.072,8.807a1.885,1.885,0,1,1,.049-3.765,1.886,1.886,0,1,1-.049,3.765m15.654,13.6H18.962V15.693c0-1.56-.545-2.626-1.908-2.626a2.068,2.068,0,0,0-1.932,1.412,2.714,2.714,0,0,0-.124.941v6.985H11.233V14.158c0-1.511-.049-2.774-.1-3.864H14.4l.174,1.684h.074a4.35,4.35,0,0,1,3.74-1.957c2.477,0,4.335,1.66,4.335,5.227Z"
                        transform="translate(0 -0.001)"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>

        <div className="dot-nav">
          <a href="#banner" className="blue active"></a>
          <a href="#skills-services" className="purple"></a>
          <a href="#projects" className="green"></a>
          <a href="#" className="white"></a>
        </div>
      </div>
    </header>
  );
}
