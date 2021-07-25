import React, { useEffect } from "react";
import headshot from "../assets/images/headshot-home.png";
import { scrollColorTrans } from "../scripts/utils";

export default function Home() {
  const bannerColor = { r: 0, g: 37, b: 108 };
  const skillsColor = { r: 30, g: 0, b: 129 };
  const projectsColor = { r: 0, g: 79, b: 129 };

  useEffect(() => {
    scrollColorTrans(
      ".home.page",
      ".home .banner",
      ".home .skills-services",
      bannerColor,
      skillsColor
    );

    scrollColorTrans(
      ".home.page",
      ".home .skills-services",
      ".home .projects",
      skillsColor,
      projectsColor
    );
  }, []);

  return (
    <div className="home page">
      <div className="banner section">
        <div className="wrapper container-lg">
          <div className="content">
            <h1>
              Writing Code<br></br>
              <span className="sky-blue">You'll Understand</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
            <a href="/" className="blue-btn">
              Hire Me
            </a>
          </div>
          <div className="headshot">
            <img src={headshot} alt="Roberts Headshot"></img>
          </div>
        </div>
      </div>
      <div className="skills-services section">
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
      <div className="projects section">
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
