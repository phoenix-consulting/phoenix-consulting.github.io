import React, { Component } from 'react'

export class faq extends Component {
  render() {
    return (
        <div id="faq">
        <div className="container">
          <div className="row">
           
              <div className="about-text">
                <h2>Frequently Asked Questions
                </h2>
                <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
                <h3>Register Now! </h3>
                <div className="">

                  <div className="col-sm-6">
                  <a href={""} target="_blank" rel="noopener noreferrer"> 
                  I'm a startup looking to attend! 
                  
                  </a>
                  </div>

                  <div className="col-sm-6">
                  <a href={""} target="_blank" rel="noopener noreferrer"> 
                  I'm an investor looking to attend! 
                  </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        
      </div>
    )
  }
}

export default faq
