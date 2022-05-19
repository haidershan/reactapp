import React from 'react'

const About = () => {
    return (
        <>
           {/* ------------------About----------------------------- */}
            <section class="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-7 col-md-12 col-12 d-flex align-items-center">
                            <div class="about-text">
                                <small class="small-text">Welcome to <span class="mobile-block">my portfolio website!</span></small>
                                <h1 class="animated animated-text">
                                    <span class="mr-2">Hey folks, I'm</span>
                                    <div class="animated-info">
                                        <span class="animated-item">Habib Haider Shan</span>
                                        <span class="animated-item">DESIGNER</span>
                                        <span class="animated-item">MERN STACK Developer</span>
                                    </div>
                                </h1>

                                <p>Building a successful product is a challenge. I am highly energetic in user experience designand and MERN stack Developer.<br/><b style={{color:"#ffc200"}}></b></p>

                                <div class="custom-btn-group mt-4">
                                    <a href="assets/Cv/Haider's cv.pdf" target ="_blank" class="btn mr-lg-2 custom-btn"><i class='uil uil-file-alt'></i> Download Resume</a>
                                    <a href="#contact" class="btn custom-btn custom-btn-bg custom-btn-link">Contact</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-5 col-md-12 col-12">
                            <div class="about-image svg">
                                <img src="assets/images/undraw/index.jpg" class="img-fluid" alt="svg image"/>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
