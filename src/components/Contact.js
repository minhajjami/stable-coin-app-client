import React from 'react';

const Contact = () => {
    return (
        <section className=" my-5 py-5" style={{backgroundColor:'#7AB259'}}>
        <div className="container">
            <div className="row">
                <div className=" col-md-5 section-header mb-5">
                    <h1>Let us handle your <br /> project, professionally</h1>
                </div>
                <div className="col-md-7 mx-auto">
                    <form action="">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your Email Address" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your names / company's name" />
                        </div>
                        <div className="form-group">
                            <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder=" Your Message"></textarea>
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn btn-dark btn-lg"> Send </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="text-center mr-3">
                <p>Copyright Stable Coin 2021</p>
            </div>
        </div>
    </section>
    );
};

export default Contact;