import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="intro-text">
                <p>
                    {this.props.data ? this.props.data.text1 : "Loading"}
                  </p>
                  <p> {" "}</p>
                  <h1>
                    {this.props.data ? this.props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  
                  <p>
                    {this.props.data ? this.props.data.text2 : "Loading"}
                  </p>
                  <p>
                    {this.props.data ? this.props.data.text3 : "Loading"}
                  </p>
                  <img src="img/unicorn-logo-05.png" width="200 rem"/> 

                  {/* <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Learn More
                  </a>{" "} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
