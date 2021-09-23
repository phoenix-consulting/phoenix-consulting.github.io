import React, { Component } from "react";

export class Program extends Component {
  render() {
    return (
      <div id="program" className="text-center" style={{marginTop:'2rem'}}>
        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>Program</h2>
        
           <p>             
             {this.props.data ? this.props.data.paragraph : "Loading"}
            </p>
            <a href={"https://airtable.com/shr9RRSty9KOOGoWD"} target="_blank" rel="noopener noreferrer"><h3 style={{color: '#f89b29', textDecoration: 'underline'}}> Apply Here Today! </h3> </a> 

            </div>
        </div>
      </div>
    );
  }
}

export default Program;