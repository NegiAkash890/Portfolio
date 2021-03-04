import React, { useEffect, useState } from "react";
import TypeWriter from "react-typewriter"

function Header() {
  const [changeNav , setNav] = useState("link-list");
  let listener = null ;
  useEffect(() => {
    listener=document.addEventListener('scroll',e=>{
      var scrolled = document.scrollingElement.scrollTop
      if(scrolled >= 700){
        setNav("link-list dark")
      }
      else{
        setNav("link-list")
      }
    })
    return ()=>{
      document.removeEventListener("scroll",listener)
    }
  }, [changeNav])
  const name = 'Akash Negi';
  return (
    <div className="header-container">
      <nav className="navbar dark">
        <ul className={changeNav}>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#resume">RESUME</a>
          </li>
          <li>
            <a href="#works">WORKS</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
      <div className="row_banner"> 
        <div className="banner-text">
          <h1>
               <TypeWriter typing={0.5}>Hi I am {name}</TypeWriter>
          </h1>
          <p>Front End Technology Enthusiast</p>
        </div>
        <div className='connect'>
          <a href='https://github.com/NegiAkash890'>
            <i className='fa fa-github fa-2x'></i>
          </a>
          <a href='https://www.instagram.com/akash_negi89/'>
              <i className='fa fa-instagram fa-2x'></i>
          </a>
           <a href='mailto:akash8900@gmail.com' >
              <i className='fa fa-envelope fa-2x'></i>
          </a>
           <a href='https://www.linkedin.com/in/akash-negi-8900'>
              <i className='fa fa-linkedin fa-2x'></i>
          </a>
        </div>
         <div className='nav-about'>
            <a id='top_btn' href='#about'>
                  <i className='arrow down'></i>
            </a>
      </div>
      </div>
     
    </div>
  );
}

export default Header;
