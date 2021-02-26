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
              Ready, Set, Health!
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#about" className="page-scroll">
                  About
                </a>
              </li>
              <li>
                <a href="#sponsors" className="page-scroll">
                  Sponsor
                </a>
              </li>
              <li>
                <a href="#attendees" className="page-scroll">
                  Attendees
                </a>
              </li>
              <li>
                <a href="#partners" className="page-scroll">
                  Partners
                </a>
              </li> 
              <li>
                <a href="#faq" className="page-scroll">
                  F.A.Q.
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Join!
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
