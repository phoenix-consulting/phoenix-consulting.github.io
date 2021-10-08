import React, { Component } from "react";

export class Program extends Component {
  render() {
    return (
      <div id="program" className="text-center" style={{marginTop:'2rem'}}>
        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>Program</h2>
        
           <p>             
             {this.props.data ? this.props.data.description : "Loading"}
            </p>
            <a href={"https://airtable.com/shr9RRSty9KOOGoWD"} target="_blank" rel="noopener noreferrer"><h3 style={{color: '#f89b29', textDecoration: 'underline'}}> Apply Here Today! </h3> </a> 
            
            <div style={{textAlign:'left'}} >
            <h3> Point People </h3>
            <p>
            {this.props.data ? this.props.data.point_people : "Loading"}
            </p>

            <h3> Mentors </h3>
            <p>
            {this.props.data ? this.props.data.mentors : "Loading"}
            </p>

            <h3> Network </h3>
            <p>
            {this.props.data ? this.props.data.network : "Loading"}
            </p>

            <h3> Workshops </h3>
            <p>
            {this.props.data ? this.props.data.workshops : "Loading"}
            </p>

            <h3> Cohort Experience </h3>
            <p>
            {this.props.data ? this.props.data.cohort_experience : "Loading"}
            </p>

            <h3> Recruitment </h3>
            <p>
            {this.props.data ? this.props.data.recruitment : "Loading"}
            </p>
            </div>

            </div>
        </div>
      </div>
    );
  }
}

export default Program;
