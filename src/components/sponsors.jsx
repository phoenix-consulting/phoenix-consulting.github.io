import React, { Component } from "react";

export class sponsors extends Component {
  render() {
    return (
      <div id="sponsors" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Sponsor</h2>
            <p> We're excited to be partnered with SOMPO Digital Labs, who are providing a $25,000 prize to one startup in attendance, as decided by a panel of judges!</p>
          </div>
          
            {this.props.data
              ? this.props.data.map((d,i) => (
                  <div className="col-sm-12">
                    {" "}
                    <a href={d.url} target="_blank" rel="noopener noreferrer"> <img src={d.img} alt="..." className="team-img" /> </a>
                  </div>
                ))
              : "Loading..."}
         
        </div>
      </div>
    );
  }
}

export default sponsors;
