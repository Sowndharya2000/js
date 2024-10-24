import React from "react";
import BreadCrumps from '../components/BreadCrumps'
function About() {
  return (
    <div>
      <BreadCrumps  page="About us"  title="About "  />
      <section id="about" className="home-services pt-lg-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
             
                  
                 
                </div>
            
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-md-0 mt-4">
          
                </div>
             
            
          
            <div className="col-lg-4 col-md-6 col-sm-12 mt-lg-0 mt-4">
             
                 
               
                </div>
               
             
       
      </section>

      <section className="w3l-aboutblock1 py-5" id="about">
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="row">
            <div className="col-lg-6 align-self">
              <span className="title-small mb-2">About Us</span>
              <p>A web developer is a programmer who develops World Wide Web applications using a client–server model. The applications typically use HTML, CSS, and JavaScript in the client, and any general-purpose programming language in the server. HTTP is used for communications between client and server.
                </p>
            </div>
            <div className="col-lg-6 left-wthree-img mt-lg-0 mt-sm-5 mt-4">
              <img
                src="assets/images/about.jpg"
                alt=""
                className="img-fluid radius-image"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w3l-servicesblock w3l-servicesblock1 py-5" id="progress">
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="row">
            <div className="col-lg-6 align-self pr-lg-4">
              <div className="progress-info info1">
                <h6 className="progress-tittle">
               HTML <span className="">90%</span>
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress-info info2">
                <h6 className="progress-tittle">
                 PHP <span className="">65%</span>
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: "95%" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress-info info3">
                <h6 className="progress-tittle">
                  JAVASCRIPT <span className="">70%</span>
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress-info info4">
                <h6 className="progress-tittle">
                  MONGO DB <span className="">80%</span>
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress-info info2 mb-0">
                <h6 className="progress-tittle">
                REACT JS <span className="">85%</span>
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: "95%" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-5 pl-lg-4">
              <span className="title-small mb-2">ALL COURSES</span>
              <h3 className="title-big">
                {" "}
                Online Courses
              </h3>
              <p className="mt-md-4 mt-3">
              Web development courses offer a pathway to building skills in creating websites and web applications. Introductory classes teach HTML, CSS, and JavaScript, providing the foundation for front-end development. More advanced learners can earn certificates in back-end technologies like Node.js, Python, and databases. Certifications help validate expertise in full-stack development, web design, and responsive frameworks. 
              </p>
              <a href="#url" className="btn btn-primary btn-style mt-md-5 mt-4">
                Get started now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="w3l-block py-5" id="">
        <div className="container py-lg-5 py-md-3">
          <div className="row">
            <div className="col-lg-6 about-right-faq align-self">
          
             
              
              <div className="two-grids mt-md-0 mt-md-5 mt-4">
               
                
              </div>
            </div>
            <div className="col-lg-3 col-6 left-wthree-img mt-lg-0 mt-sm-5 mt-4">
              
            </div>
            <div className="col-lg-3 col-6  left-wthree-img mt-lg-0 mt-sm-5 mt-4">
              
            </div>
          </div>
        </div>
      </section>
      {/* stats */}
      <section className="w3l-stats py-5" id="stats">
        <div className="gallery-inner container py-lg-5 py-md-4">
          <span className="title-small text-center mb-1">Our Achievements</span>
          <h3 className="title-big text-center mb-5">Our progress never Ends</h3>
          <div className="row stats-con">
            <div className="col-md-3 col-6 stats_info counter_grid">
              <p className="counter">500 </p>
              <span className="plus">+</span>
              <br />
              <h3>Students Enrolled</h3>
            </div>
            <div className="col-md-3 col-6 stats_info counter_grid1">
              <p className="counter">56</p>
              <span className="plus">+</span>
              <br />
              <h3>Courses Uploaded</h3>
            </div>
            <div className="col-md-3 col-6 stats_info counter_grid mt-md-0 mt-4">
              <p className="counter">130</p>
              <span className="plus">k</span>
              <br />
              <h3>Certified students</h3>
            </div>
            <div className="col-md-3 col-6 stats_info counter_grid2 mt-md-0 mt-4">
              <p className="counter">243 </p>
              <span className="plus">+</span>
              <br />
              <h3>Global Teachers </h3>
            </div>
          </div>
        </div>
      </section>
      {/* //stats */}

    </div>
  );
}

export default About;
