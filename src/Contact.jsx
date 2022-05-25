import React, { useState } from "react";
// import axios from 'axios';
const Contact = () => {
    const [user, setUser] = useState({
        Name: "",
        Email: "",
        Message: ""
    })
  async  function Submitdata(e) {
        const {Name, Email, Message} = user;
        e.preventDefault();
    //    await axios.post("http://localhost:8080/Data",{
    //         name: Name,
    //             email: Email,
    //                 message: Message
    //     }).then((res)=>{
    //         console.log(res.data);
    //     })
    }
    function HandleInputs(e) {
        let name = e.target.name, value = e.target.value;
        setUser({ ...user, [name]: value });
    }
    return (
        <>
            {/* CONTACT */}
            <section className="contact py-5" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="contact-form">
                                <h2 className="mb-4">Interested to work together? Let's talk</h2>
                                <h3 className="mb-4">Send email or contact me on my phone number</h3>
                                <h3 className="mb-4">Details are here</h3>
                                    
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact;
