import React, { Component } from "react";

export class Attendees extends Component {
  render() {
    return (
      <div id="attendees" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Attendees</h2>
            <p>
            Here's a glimpse of who's attending our event
                        </p>

            <iframe class="airtable-embed"
            src="https://airtable.com/embed/shrmb0HR77zTu3iqu?backgroundColor=yellow&viewControls=on"
            style={{frameborder: "0", onmousewheel: "", width: "100%", height:"533", style:"background: transparent; border: 1px solid #ccc;"}}></iframe>
            
          </div>
          <div className="row">
            
{/* Make a temporary airtable and embed it here  */}

            {/* <div className="attendees-items">
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="attendees-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/attendees/01-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Lorem Ipsum</h4>
                      </div>
                      <img
                        src="img/attendees/01-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="attendees-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/attendees/02-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Adipiscing Elit</h4>
                      </div>
                      <img
                        src="img/attendees/02-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="attendees-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/attendees/03-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Lorem Ipsum</h4>
                      </div>
                      <img
                        src="img/attendees/03-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="attendees-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/attendees/04-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Lorem Ipsum</h4>
                      </div>
                      <img
                        src="img/attendees/04-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="attendees-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/attendees/05-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Adipiscing Elit</h4>
                      </div>
                      <img
                        src="img/attendees/05-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="attendees-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/attendees/06-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Dolor Sit</h4>
                      </div>
                      <img
                        src="img/attendees/06-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="attendees-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/attendees/07-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Dolor Sit</h4>
                      </div>
                      <img
                        src="img/attendees/07-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="attendees-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/attendees/08-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Lorem Ipsum</h4>
                      </div>
                      <img
                        src="img/attendees/08-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="attendees-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/attendees/09-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Adipiscing Elit</h4>
                      </div>
                      <img
                        src="img/attendees/09-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
    );
  
  }
}

export default Attendees;
