import React, { Component } from "react";

export class Partners extends Component {
  render() {
    return (
      <div id="partners" className="text-center">
        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>In partnership with</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p> */}
          </div>
          <div id="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div className="col-sm-4 partners">
                    <div className="thumbnail">
                      {" "}
                      <a href={d.url} target="_blank" rel="noopener noreferrer"> <img src={d.img} alt="..." className="partners-img" /> </a>
                      
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default Partners;
