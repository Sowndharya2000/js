import React from "react";
import BreadCrumps from "../components/BreadCrumps";

function Technologies() {
  return (
    <div>
      <BreadCrumps page="Courses" title="All Courses" />
      <section class="w3l-courses">
        <div class="blog pb-5" id="courses">
          <div class="container py-lg-5 py-md-4 py-2">
            <div class="row">
              <div class="col-lg-4 col-md-6 item">
                <div class="card">
                  <div class="card-header p-0 position-relative">
                    <a href="#course-single" class="zoom d-block">
                      <img
                        class="card-img-bottom d-block"
                        src="assets/images/html4.png"
                        alt="Card cap"
                      />
                    </a>
                   
                  </div>
                  <div class="card-body course-details">
                    
                    <a href="#course-single" class="course-desc">
                   HTML
                    </a>
                    <div class="course-meta mt-4">
                      
                     
                    </div>
                  </div>
                 
               
                </div>
              </div>

              <div class="col-lg-4 col-md-6 item mt-md-0 mt-5">
                <div class="card">
                  <div class="card-header p-0 position-relative">
                    <a href="#course-single" class="zoom d-block">
                      <img
                        class="card-img-bottom d-block  "
                        src="assets/images/images3.png"
                        alt="Card cap"
                      />
                    </a>
                    
                  </div>
                  <div class="card-body course-details">
                    <div class="price-review d-flex justify-content-between mb-1align-items-center">
                    
                     
                    </div>
                    <a href="#course-single" class="course-desc">
                     CSS
                    </a>
                   
                  </div>
                 
                  </div>
                
              </div>

              <div class="col-lg-4 col-md-6 item mt-lg-0 mt-5">
                <div class="card">
                  <div class="card-header p-0 position-relative">
                    <a href="#course-single" class="zoom d-block">
                      <img
                        class="card-img-bottom d-block"
                        src="assets/images/java.png"
                        alt="Card cap"
                      />
                    </a>
                  
                  </div>
                  <div class="card-body course-details">
                    <div class="price-review d-flex justify-content-between mb-1align-items-center">
                 
                    
                    </div>
                    <a href="#course-single" class="course-desc">
                    JAVASCRIPT
                    </a>
                  
                  
                  </div>
                 
                  
                </div>
              </div>
              <div class="col-lg-4 col-md-6 item mt-5 pt-lg-2">
                <div class="card">
                  <div class="card-header p-0 position-relative">
                    <a href="#course-single" class="zoom d-block">
                      <img
                        class="card-img-bottom d-block"
                        src="assets/images/react js.webp"
                        alt="Card cap"
                      />
                    </a>
                    <div class="post-pos">
                    
                    </div>
                  </div>
                  <div class="card-body course-details">
                    <div class="price-review d-flex justify-content-between mb-1align-items-center">
                    
                     
                    </div>
                    <a href="#course-single" class="course-desc">
                     REACT JS
                    </a>
                    <div class="course-meta mt-4">

                    
                    </div>
                  </div>
               
                </div>
              </div>

              <div class="col-lg-4 col-md-6 item mt-5 pt-lg-2">
                <div class="card">
                  <div class="card-header p-0 position-relative">
                    <a href="#course-single" class="zoom d-block">
                      <img
                        class="card-img-bottom d-block"
                        src="assets/images/node.jpg"
                        alt="Card cap"
                      />
                    </a>
                   
                    <div class="post-pos">
                     
                    </div>
                  </div>
                  <div class="card-body course-details">
                    <div class="price-review d-flex justify-content-between mb-1align-items-center">
                    
                    
                    </div>
                    <a href="#course-single" class="course-desc">
                     NODE JS
                    </a>
                   
                  </div>
                 
                </div>
              </div>

              <div class="col-lg-4 col-md-6 item mt-5 pt-lg-2">
                <div class="card">
                  <div class="card-header p-0 position-relative">
                    <a href="#course-single" class="zoom d-block">
                      <img
                        class="card-img-bottom d-block"
                        src="assets/images/mongo.png"
                        alt="Card cap"
                      />
                    </a>
                  </div>
                  <div class="card-body course-details">
                    <div class="price-review d-flex justify-content-between mb-1align-items-center">
                     
                     
                    </div>
                    <a href="#course-single" class="course-desc">
                    MONGO DB
                    </a>
                    <div class="course-meta mt-4">
                     
                      
                    
                  </div>
               
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Technologies;
