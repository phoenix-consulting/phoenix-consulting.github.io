import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
        <div id="about">
        <div className="container">
          <div className="row">
            
            
              <div className="about-text">
                <h2 >About Us</h2>           
                <p><a href={"https://phoenix.berkeley.edu"} target="_blank" rel="noopener noreferrer" >Phoenix Consulting Group</a> {this.props.data ? this.props.data.paragraph : 'loading...'}</p>
                <a href={"https://airtable.com/shr9RRSty9KOOGoWD"} target="_blank" rel="noopener noreferrer" ><h3 style={{color: '#f89b29', textDecoration: 'underline'}}> Apply To Our Program Here! </h3></a> 
                
                <p> Feel free to send any additional inquiries to healthengine.berkeley@gmail.com.
</p>
                {/* <div className="">

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

                </div> */}
             
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about
