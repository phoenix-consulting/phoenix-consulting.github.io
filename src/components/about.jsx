import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
        <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6"> 
            <a href={"https://phoenix.berkeley.edu"} target="_blank" rel="noopener noreferrer"> <img src="img/phoenix.png" className="img-responsive" alt=""/>
            </a>
            
            <a href={"https://berkeley.edu"} target="_blank" rel="noopener noreferrer"> <img src="img/berkeley.png" className="img-responsive" alt=""/>
            </a> </div>
            <div className="col-md-6">
              <div className="about-text">
                <h2>About Us</h2>
                <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
                <h3>Register Now! </h3>
                <div className="">

                  <div className="col-sm-6">
                  <a href={"https://airtable.com/shrGZDCXyjRIt20UO"} target="_blank" rel="noopener noreferrer"> 
                  I'm a startup looking to attend! 
                  
                  </a>
                  </div>

                  <div className="col-sm-6">
                  <a href={"https://airtable.com/shrOhwEA2rexgig5l"} target="_blank" rel="noopener noreferrer"> 
                  I'm an investor looking to attend! 
                  </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about
