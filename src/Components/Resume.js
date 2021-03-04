import React from "react";
import "./Resume.css";
function Resume() {
  return (
    <div className="resume_container" id='resume'>
      <div className="education">
        <h2>EDUCATION</h2>
        <div className="edu info">
          <div>
          <h2>AIACTR , NEW DELHI</h2>
          <em>Bachelor's Degree , ECE</em>
          <p><em>2018-*</em></p>
          </div>
          <div>
          <h2>SCDAV, NOIDA</h2>
           <em>Senior Secondary</em>
          <p><em>2017-2018</em></p>
        </div>
        </div>
        
      </div>

      <div className="internship">
        <h2>INTERNSHIP</h2>
        <div className="intern info">
          <h2>FRONT END INTERN <a href='https://github.com/NegiAkash890/WeCBR'><i className='fa fa-link'></i></a></h2>
          <p><em>SUMMER(2020)</em></p>
       
        </div>
      </div>

      <div className="skills">
        <h2>SKILLS</h2>
        <div className="ski info">
          <strong>My Programming Languages</strong>
          <p>
            <label for="html"><small>HTML</small></label>
            <progress id="html" value="4" max="5"></progress>
          </p>
          <p>
            <label for="html"><small>CSS</small></label>
            <progress id="html" value="4" max="5"></progress>
          </p>
          <p>
            <label for="html"><small>JAVASCRIPT</small></label>
            <progress id="html" value="4" max="5"></progress>
          </p>
           <p>
            <label for="html"><small>REACT</small></label>
            <progress id="html" value="3" max="5"></progress>
          </p>
          <p>
            <label for="html"><small>GIT</small></label>
            <progress id="html" value="4" max="5"></progress>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
