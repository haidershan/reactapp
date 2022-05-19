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
                                <form method="POST">
                                    <div className="row">
                                        <div className="col-lg-6 col-12">
                                        <input onChange={HandleInputs} name="Name" type="text" className="form-control " required="required" placeholder="Your Name" />
                                        </div>
                                        <div className="col-lg-6 col-12">
                                        <input onChange={HandleInputs} name="Email" type="text" className="form-control " required="required" placeholder="Your Email" />
                                        </div>
                                        <div className="col-12">
                                        <textarea onChange={HandleInputs} name="Message" required="required" className="form-control" style={{ minHeight: '150px' }} placeholder="Message" defaultValue={""} />
                                        </div>
                                        <div className="ml-lg-auto col-lg-5 col-12">
                                        <button type="submit" onClick={Submitdata} className="btn btn-info btn-block btn-lg">SUBMIT</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact;
