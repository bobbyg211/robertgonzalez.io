import React, { useEffect } from "react";
import headshot from "../assets/images/headshot-home.png";
import { scrollBgColorTrans } from "../scripts/utils";

export default function Home() {
  useEffect(() => {
    const bannerColor = { r: 0, g: 37, b: 108 };
    const skillsColor = { r: 30, g: 0, b: 129 };
    const projectsColor = { r: 0, g: 79, b: 129 };

    scrollBgColorTrans(
      "#home.page",
      null,
      "#home #banner",
      "#home #skills-services",
      bannerColor,
      skillsColor
    );

    scrollBgColorTrans(
      "#home.page",
      null,
      "#home #skills-services",
      "#home #projects",
      skillsColor,
      projectsColor
    );
  }, []);

  return (
    <div id="home" className="page">
      <div id="banner" className="section">
        <div className="wrapper container-lg">
          <div className="content">
            <h1>
              Writing Code<br></br>
              <span className="sky-blue">You'll Understand</span>
            </h1>
            <p className="intro">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
            <div className="ctas">
              <a href="/" className="blue-btn">
                Hire Me
              </a>
            </div>
          </div>
          <div className="headshot">
            <img src={headshot} alt="Roberts Headshot"></img>
          </div>
        </div>
      </div>
      <div id="skills-services" className="section">
        <div className="wrapper container-lg">
          <div className="content">
            <h2>
              Skills &amp;<br></br>{" "}
              <span className="light-purple">Services</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua.
            </p>
          </div>
        </div>
      </div>
      <div id="projects" className="section">
        <div className="wrapper container-lg">
          <div className="content">
            <h2>
              Sift Through<br></br> <span className="aqua">Services</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
