import React from "react";
import './About.css'
function About() {
  return (
    <div className="about_container">
      <section className='display-pic'>
          <img src='' alt='profile-pic'/>
      </section>
      <section className="main-content">
        <section>
          <h3>About Me</h3>
          <p>
            Hi there! I am Akash! You might also know me as Game Changer. I've
            been coding for over 2 years now. As a  developer I've
            worked both with startups and large corporations to help build &
            scale their companies. Along the journey I realised my passion
            existed in helping others excel and pursue their dreams as upcoming
            developers. With this passion, I have now trained thousand's of
            developers across the globe. Through live coaching sessions on
            Youtube, I have accumulated several MILLION views demonstrating how
            to apply developer skills in a range of cool builds and challenges.
            I deliver REAL VALUE by teaching REAL WORLD projects to help
            students enter the world of web development. You’ll get hands-on
            experience and learn the skills that are required to succeed in the
            real-world in this community.
          </p>
        </section>
        <section className='resume_section'>
            <div>
                <h3>Contact Details</h3>
                <p>45D ExpressView Apartment</p>
                <p>Noida, Uttar Pradesh ,India</p>
                <telephone>+91 9990879987</telephone>
                <p>akash8900@gmail.com</p>
            </div>
            <button id='resume_download'>Download Resume</button>
        </section>
      </section>
    </div>
  );
}

export default About;
