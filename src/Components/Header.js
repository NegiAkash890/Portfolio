import React from "react";


function Header() {
  return (
    <div className="header-container">
      <nav className="navbar">
        <ul className="link-list">
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">RESUME</a>
          </li>
          <li>
            <a href="#">WORKS</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </nav>
      <div className="row_banner">
        <div className="banner-text">
          <h1>My Name is Akash Negi</h1>
          <p>Front End Technology Enthusiast</p>
        </div>
        <div className='connect'>
             <i className='fa fa-facebook-square fa-2x'></i>
             <i className='fa fa-instagram fa-2x'></i>
             <i className='fa fa-envelope fa-2x'></i>
             <i className='fa fa-linkedin fa-2x'></i>
        </div>
         <div className='nav-about'>
            <button id='top_btn'></button>
      </div>
      </div>
     
    </div>
  );
}

export default Header;
