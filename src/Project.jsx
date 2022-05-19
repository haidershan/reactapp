import React from 'react';
var slideIndex = 0;
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
}
setTimeout(showSlides, 5000); // Change image every 2 seconds
const Project = () => {
  return (
    <>
      <section className="project py-5" id="project">
        <div className="container">
          <div className="row">
            <div className="col-lg-11 text-center mx-auto col-12">
              <div className="col-lg-8 mx-auto">
                <h2>Things I have designed for digital media agencies</h2>
              </div>
              <div>
                {/* Slideshow container */}
                <div className="slideshow-container">
                  {/* Full-width images with number and caption text */}
                  <div className="mySlides">
                    <video controls  preload="auto"  style={{ width: "80vw" }}>
                      <source src="assets/images/project/video1.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
                <br />
              </div>

            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Project;
