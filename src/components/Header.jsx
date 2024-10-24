import React, { useState } from "react";

function Header() {
  const currentTheme = localStorage.getItem('theme');
    
  if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
  }

  const [checked, setChecked] = useState(currentTheme === 'dark')
  
  function changeTheme(e){   
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      setChecked(true)
  }
  else {       
     document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        setChecked(false)
  }     
    
  }
  return (
    <div>
      {/*header*/}
      <header id="site-header" className="fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark stroke">
            <h1>
              <a className="navbar-brand" href="/">
                <span className="fa fa-diamond"></span>
             SOWNDHARYA
              
              </a>
            </h1>

          
            <button
              className="navbar-toggler  collapsed bg-gradient"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
              <span className="navbar-toggler-icon fa icon-close fa-times"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mx-lg-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    Home
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item @@about__active">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
               
                <li className="nav-item @@courses__active">
                  <span>
                  <a className="nav-link" href="/Technologies">
                    Technologies
                  </a>
                  </span> 
                 
                </li>
                <li className="nav-item @@contact__active">
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>

            
              <div className="search-right">
                <a href="#search" title="search">
                  <span className="fa fa-search" aria-hidden="true"></span>
                </a>
               
                <div id="search" className="pop-overlay">
                  <div className="popup">
                    <form
                      action="error.html"
                      method="GET"
                      className="search-box"
                    >
                      <input
                        type="search"
                        placeholder="Search"
                        name="search"
                        required="required"
                        autoFocus=""
                      />
                      <button type="submit" className="btn">
                        <span
                          className="fa fa-search"
                          aria-hidden="true"
                        ></span>
                      </button>
                    </form>
                  </div>
                  <a className="close" href="#close">
                    &times;
                  </a>
                </div>
                
              </div>
              
            </div>
           
            <div className="mobile-position">
              <nav className="navigation">
                <div className="theme-switch-wrapper">
                  <label className="theme-switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" checked={checked} onChange={changeTheme} />
                    <div className="mode-container py-1">
                      <i className="gg-sun"></i>
                      <i className="gg-moon"></i>
                    </div>
                  </label>
                </div>
              </nav>
            </div>
           
          </nav>
        </div>
      </header>
      {/*/header*/}
    </div>
  );
}

export default Header;
