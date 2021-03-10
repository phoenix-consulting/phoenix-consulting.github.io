import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div>
        <div id="contact">
          <div className="container">

          <div className="">
              <div className="">
                <h2>Join Us!</h2>
                <div className="col-sm-6">
                <a href={"https://airtable.com/shrGZDCXyjRIt20UO"} target="_blank" rel="noopener noreferrer" style={{textDecoration: "underline"}}> 
                <h3> Click here if you're a startup looking to register! </h3> 
                </a>
                </div>
                <div className="col-sm-6">
                <a href={"https://airtable.com/shrOhwEA2rexgig5l"} target="_blank" rel="noopener noreferrer" style={{textDecoration: "underline"}}> 
                <h3> Click here if you're an investor looking to register! </h3> 
                </a>
                </div>

                

              </div>

              

            </div>

              <div className="row">
                <div className="section-title">
                  <h3>For other inquiries</h3>
                  <p>
                    Follow the appropriate link to apply as a startup, or to attend as an investor. If you're interested in partnering with us as a sponsor or have other inquiries, please email mohakjain@berkeley.edu and we'll do our best to get back to you expeditiously.  
                  </p>
                </div>
{/* 
                <form name="sentMessage" id="contactForm" noValidate>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Name"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      required
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Send Message
                  </button>
                </form> */}

                <div className="social">
                  <ul>
                    
                    <li>
                      <a href={this.props.data ? this.props.data.twitter : "/"} target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>

                  </ul>
              
            </div>
            </div>

            
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <p>
              &copy; 2021 Phoenix Consulting Group
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
