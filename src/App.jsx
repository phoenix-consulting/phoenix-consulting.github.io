import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Sponsors from './components/sponsors';
import About from './components/about';
import Services from './components/services';
import Attendees from './components/attendees';
import Testimonials from './components/testimonials';
import Partners from './components/partners';
import Contact from './components/contact';
import Faq from './components/faq';
import JsonData from './data/data.json';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        
        <About data={this.state.landingPageData.About} />
        <Sponsors data={this.state.landingPageData.Sponsors} />
        {/* <Services data={this.state.landingPageData.Services} /> */}
        <Attendees />
        {/* <Testimonials data={this.state.landingPageData.Testimonials} /> */}
        <Partners data={this.state.landingPageData.Partners} />
        <Faq data={this.state.landingPageData.Faq}/>
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default App;
