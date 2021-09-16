import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Sponsors from './components/sponsors';
import About from './components/about';
import Services from './components/services';
import ReadySetHealth from './components/readysethealth';
import Testimonials from './components/testimonials';
import Partners from './components/partners';
import Contact from './components/contact';
import Faq from './components/faq';
import Program from './components/program';
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
        
        {/* <Sponsors data={this.state.landingPageData.Sponsors} /> */}
        {/* <Services data={this.state.landingPageData.Services} /> */}
        <Program data={this.state.landingPageData.Program}/>
        <ReadySetHealth />
        {/* <Testimonials data={this.state.landingPageData.Testimonials} /> */}
        {/* <Partners data={this.state.landingPageData.Partners} /> */}
        {/* <Faq data={this.state.landingPageData.Faq}/> */}
        <About data={this.state.landingPageData.About} />
        <Contact data={this.state.landingPageData.Contact} />
        

      </div>
    )
  }
}

export default App;
