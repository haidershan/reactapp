import React from 'react'

const Features = () => {
    return (
        <>
            {/* FEATURES */}
            <section className="resume py-5 d-lg-flex justify-content-center align-items-center" id="Team">
                <div className="body">
                    <div className="team-container">
                        <input type="radio" name="dot" id="one" />
                        <input type="radio" name="dot" id="two" />
                        <div className="main-card">
                            <div className="cards">
                                <div className="card">
                                    <div className="content">
                                        <div className="img">
                                            <img src="assets/images/Team/img1.jpeg" alt="Team-img" />
                                        </div>
                                        <div className="details">
                                            <div className="name">Habib haider shan</div>
                                            <div className="job">Mern stack devolper</div>
                                        </div>
                                        <div className="media-icons">
                                            <a href="#"><i className="fab fa-facebook-f" /></a>
                                            <a href="#"><i className="fab fa-twitter" /></a>
                                            <a href="#"><i className="fab fa-instagram" /></a>
                                            <a href="#"><i className="fab fa-youtube" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="content">
                                        <div className="img">
                                            <img src="assets/images/Team/Arslan.jpeg" alt="Team-img" />
                                        </div>
                                        <div className="details">
                                            <div className="name">mudassar shakeel</div>
                                            <div className="job">IT Speciallist</div>
                                        </div>
                                        <div className="media-icons">
                                            <a href="#"><i className="fab fa-facebook-f" /></a>
                                            <a href="#"><i className="fab fa-twitter" /></a>
                                            <a href="#"><i className="fab fa-instagram" /></a>
                                            <a href="#"><i className="fab fa-youtube" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="content">
                                        <div className="img">
                                            <img src="assets/images/Team/faseeh.jpg" alt="" />
                                        </div>
                                        <div className="details">
                                            <div className="name">zulqurnain</div>
                                            <div className="job">Devolper desktop applications</div>
                                        </div>
                                        <div className="media-icons">
                                            <a href="#"><i className="fab fa-facebook-f" /></a>
                                            <a href="#"><i className="fab fa-twitter" /></a>
                                            <a href="#"><i className="fab fa-instagram" /></a>
                                            <a href="#"><i className="fab fa-youtube" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cards">
                                
                            </div>
                        </div>
                        <div className="button">
                            <label htmlFor="one" className=" active one" />
                            <label htmlFor="two" className="two" />
                        </div>
                    </div>

                </div>
            </section>


        </>
    )
}

export default Features;
