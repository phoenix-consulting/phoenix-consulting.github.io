import React, { Component } from 'react'

export class faq extends Component {
  render() {
    return (
        <div id="faq">
        <div className="container">
          <div className="row">
           
              <div className="faq-text">
                <h2>Frequently Asked Questions
                </h2>
                
                {this.props.data ? this.props.data.map((d,i) => (
                <div>
                <h3> {d.question} </h3>
                <p> {d.answer} </p>
                </div>
                )) : "Loading..."}
                
                </div>
              </div>
            </div>
          </div>
            )
  }
}

export default faq
