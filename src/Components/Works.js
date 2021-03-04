import React from "react";
import "./Works.css";
function Works() {
  return (
    <div className="work_container" id='works'>
      <em>Check some of My Works</em>
      <div className="project_works">
        <a className='project_container'  href='https://walmat-clone.web.app/'>
          <blockquote>WALMART CLONE</blockquote>
          <p className='project_description'>React , Firebase</p>
          <img src='WMC.png' className='thumbnail'/>
        </a>
         <a className='project_container' href='https://netflix-clone-605b2.web.app/'>
          <blockquote>NETFLIX CLONE</blockquote>
           <p className='project_description'>React , Redux and Firebase</p>
         <img src='NFX.png'className='thumbnail'/>
        </a>
         <a className='project_container' href='https://negiakash890.github.io/Random-Quote-Generator/'>
          <blockquote>RANDOM QUOTE GENERATOR</blockquote>
          <p className='project_description'>Bootstrap and JSON</p>
         <img src='RQM.png'className='thumbnail'/>
        </a>
      </div>
    </div>
  );
}

export default Works;
