import React from 'react';
const style = {
    backgroundColor: "white",
    width: "100%",
    display: "flex",
    flexWrap: "Wrap",
    justifyContent: "space-around"

}
const footerLabel = {
    fontWeight: "bold",
    fontSize: "25px",
    margin: "15px"
}

const Footer1 = () => {
    return (
        <>
            <div style={style} >

                <div>
                    <div style={footerLabel}> Follow US </div>
                    <div className="media-icons">
                        <a href=""><i className="fab fa-facebook-f" /></a>
                        <a href="#"><i className="fab fa-twitter" /></a>
                        <a href="#"><i className="fab fa-instagram" /></a>
                        <a href="#"><i className="fab fa-youtube" /></a>
                    </div>
                </div>
                <div>
                    <div style={footerLabel}> Our Location </div>
                    <div>

                        <h4>New City Kasur, Kasur</h4>
                        <h4>Punjab, Pakistan.</h4>
                        <h4><strong style={{fontWeight:'lighter'}}>Call:</strong> +92 3204664597 </h4>
                        <h4><strong style={{fontWeight:'lighter'}}>Email: </strong>haidershan1805@gmail.com</h4>

                    </div>
                </div>
                <div>
                    <div style={footerLabel}> Find US </div>
                    <div>
                    <iframe src="https://maps.google.com/maps?width=600&height=400&hl=en&q=peera kot chowk , Kasur&t=&z=14&ie=UTF8&iwloc=B&output=embed" width="100%" height={150} frameBorder={0} style={{ border: 0 }} allowFullScreen />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer1;
