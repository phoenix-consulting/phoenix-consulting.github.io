import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>


            
            <a className="navbar-brand page-scroll" href="#page-top">
              Health Engine
            </a>
            <img src="img/unicorn-logo-06.png" width="50 rem"/> 

          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
            

              <li>
                <a href="#about" className="page-scroll">
                  <p>About</p>
                </a>
              </li>


              <li>
                <a href="#program" className="page-scroll">
                  <p> Program</p>
                </a>
              </li>

              <li>
                <a href="#ready-set-health" className="page-scroll">
                  <p> Ready, Set, Health!</p>
                </a>
              </li>
             
              <li>
                <a href="#contact" className="page-scroll">
                  <p> Apply! </p>
                </a>
              </li>

              
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
