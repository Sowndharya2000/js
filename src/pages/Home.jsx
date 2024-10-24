import React from 'react'

function Home() {
  return (
    <div>

        {/* main-slider */}
        <section className="w3l-main-slider" id="home">
            <div className="companies20-content">
                <div className="owl-one owl-carousel owl-theme">
                    <div className="item">
                        <li>
                            <div className="slider-info banner-view bg bg2">
                                <div className="banner-info">
                                    <div className="container">
                                        <div className="banner-info-bg">
                                            <h5>WEB DEVELOPER</h5>
                                          
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>
                    <div className="item">
                        <li>
                            <div className="slider-info  banner-view banner-top1 bg bg2">
                                <div className="banner-info">
                                    <div className="container">
                                        <div className="banner-info-bg">
                                            <h5>FRONTEND DEVELOPER </h5>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>
                    <div className="item">
                        <li>
                            <div className="slider-info banner-view banner-top2 bg bg2">
                                <div className="banner-info">
                                    <div className="container">
                                        <div className="banner-info-bg">
                                            <h5>BACKEND DEVELOPER</h5>
                                          
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>
                    <div className="item">
                        <li>
                            <div className="slider-info banner-view banner-top3 bg bg2">
                                <div className="banner-info">
                                    <div className="container">
                                        <div className="banner-info-bg">
                                            <h5>FULL STACK DEVELOPER</h5>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>
                </div>
            </div>

            <div className="waveWrapper waveAnimation">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path d="M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                        style={{stroke: "none"}}></path>
                </svg>
            </div>
        </section>
        {/* /main-slider */}
        <section className="w3l-courses">
            <div className="blog pb-5" id="courses">
                <div className="container py-lg-5 py-md-4 py-2">
                    <h5 className="title-small text-center mb-1">OUR COURSES</h5>
                    
                    <div className="row">
                        <div className="col-lg-4 col-md-6 item">
                            <div className="card">
                                <div className="card-header p-0 position-relative">
                                    <a href="#course-single" className="zoom d-block">
                                        <img className="card-img-bottom d-block" src="assets/images/WEB.avif"
                                            alt="Card cap" />
                                    </a>
                                    <div className="post-pos">
                                        
                                    </div>
                                </div>
                                <div className="card-body course-details">
                                    <div className="price-review d-flex justify-content-between mb-1align-items-center">
                                       
                                    </div>
                                    <a href="#course-single" className="course-desc">WEB DEVELOPER
                                    
                                    </a>
                                    
                                </div>
                              
                            </div>
                        

                      
            </div>

            <div className="col-lg-4 col-md-6 item mt-lg-0 mt-5">
                            <div className="card">
                                <div className="card-header p-0 position-relative">
                                    <a href="#course-single" className="zoom d-block">
                                        <img className="card-img-bottom d-block" src="assets/images/front.jpg"
                                            alt="Card cap" />
                                    </a>
                                  
                                </div>
                                <div className="card-body course-details">
                                    <div className="price-review d-flex justify-content-between mb-1align-items-center">
                                       
                                    </div>
                                    <a href="#course-single" className="course-desc">FRONTEND DEVELOPER</a>
                                    <div className="course-meta mt-4">
                                     
                                    </div>
                                </div>
                              
                            </div>
                        
                    

            </div>

            
            <div className="col-lg-4 col-md-6 item mt-lg-0 mt-5">
                            <div className="card">
                                <div className="card-header p-0 position-relative">
                                    <a href="#course-single" className="zoom d-block">
                                        <img className="card-img-bottom d-block" src="assets/images/back3.jpg"
                                            alt="Card cap" />
                                    </a>
                                  
                                </div>
                                <div className="card-body course-details">
                                    <div className="price-review d-flex justify-content-between mb-1align-items-center">
                                       
                                    </div>
                                    <a href="#course-single" className="course-desc">BACKEND DEVELOPER</a>
                                    <div className="course-meta mt-4">
                                     
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                    </div>

            </div>
            
            
          
            

           </div>
        </section>

       
                   

       
    
       
                                 
                                      
                                         
                                   
                                
                              
                               
                          
                 
                
           
       


      </div>
            


  
  )
}

export default Home