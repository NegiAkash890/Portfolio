import React from "react";
import "./About.css";
import profile from "./profile.jpg";
function About() {
  return (
    <div className="about_container" id="about">
      <section className="display-pic">
        <img src={profile} alt="profile-pic" id="dp" />
      </section>
      <section className="main-content">
        <section class="my_info">
          <h3>About Me</h3>
          <p>
            I am Akash Negi , pursuing B.Tech (ECE) from AIACTR , Delhi. I love experimenting and  building new projects . 
            Having keen interest in web technologies I learn new things everyday to satisfy my desire to learn.
            Currently I am learning to contribute to Open-Source . Everyday , I try to contribute to open-source community , sometimes  it's a successfull PR and often I end up learning new features of GitHub : D 
          </p>
        </section>
        <section className="resume_section">
          <div>
            <h3>Contact Details</h3>
            <p>
              <i className="fa fa-phone"></i> +91 9990879987
            </p>
            <p>
              <i class="fa fa-envelope"></i> akash8900@gmail.com
            </p>
            <p>
              <i className="fa fa-github"></i> NegiAkash890
            </p>
          </div>
          <a href="Resume_Akash.doc" download="RESUME.pdf" id="resume_download">
            <i className="fa fa-download"></i> Download Resume
          </a>
        </section>
      </section>
    </div>
  );
}

export default About;
