import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {TweenMax} from 'gsap';
import ReactTransitionGroup from 'react-transition-group';

class About extends Component{
  constructor(props){
    super(props)
    this.state = {
      selected: "profile",
      capabilities: "design"
    }
    this.dom = {};
    this.handleSection = this.handleSection.bind(this);
    this.handleCap = this.handleCap.bind(this);
  }

  componentDidMount(){
    this.dom.root = ReactDOM.findDOMNode(this);
  }

  componentWillEnter(callback){
    const el = this.container;
    // TweenMax.fromTo(el, 0.3, {y: -1000, opacity: 0, height: '0vh'}, {y: 0, opacity: 1, height: '100vh', onComplete: callback});
    TweenMax.fromTo(el, 0.3, {opacity: '0'}, {opacity: '1', onComplete: callback});

  }

  componentWillLeave(callback){
    const el = this.container;
    TweenMax.fromTo(el, 0.3, {opacity: '1'}, {opacity: '0', onComplete: callback});
  }

  handleSection(event){
    this.setState({
      selected: event
    });
  }
  handleCap(event){
    this.setState({
      capabilities: event
    });
  }


  render(){
    return(
      <div className="aboutContainer" ref={c => this.container = c}>
        <div className="about">
          <div className="about__top">
            <img className="about__top__img" src="/imgs/util/logo.png" />
          </div>
          <div className="about__main">
            <div className="about__main__links">
              <p className={"about__link " + (this.state.selected === 'profile' ? " about__selected " : "")} onClick={() => this.handleSection('profile')}> Profile </p>
              <p className="about__slash"> / </p>
              <p className={"about__link " + (this.state.selected === 'process' ? " about__selected " : "")} onClick={() => this.handleSection('process')}> Process </p>
              <p className="about__slash"> / </p>
              <p className={"about__link " + (this.state.selected === 'capabilities' ? " about__selected " : "")} onClick={() => this.handleSection('capabilities')}> Capabilities </p>
            </div>

            {this.state.selected === "profile" &&
              <div className="about__main__profile">
                <br /><br />
                <p className="about__text"> Public designs concepts, spaces, and narratives, in partnership with tech start ups and cultural and institutions. we work in close collaboration with Musicians, Artists, Architects, Curators, Critics, Directors, Museums and Cultural Institutions. </p>
                <br /><br />
                <p className="about__text"> Drop us a line. For New Buisness Inquiries Please Contact Our Office </p>
                <br /><br />
                <div className="about__main__profile__contact">
                  <div className="about__main__profile__contact__office">
                    <p className="about__text"> PUBLIC.GROUP </p>
                    <p className="about__text"> Washington DC </p>
                    <br />
                    <p className="about__text"> 1-(555)-555-5555 </p>
                    <a className="about__text" style={{color: '#f2f2f2', textDecoration: 'none'}} href="mailto:office@public.group?subject=Inquiries Feedback"> office@public.design </a>
                  </div>
                  {/* <br /><br /> */}
                  <div className="about__main__profile__images">
                    <div className="about__main__profile__images__item">
                      {/* <img className="about__picture" src="http://lorempixel.com/100/100" /> */}
                      <p className="about__profName"> Moustafa Hassan </p>
                      <a className="about__email" href="mailto:moustafa@public.group?subject=Inquiries"> moustafa@public.group </a>
                    </div>
                    <div className="about__main__profile__images__item">
                      {/* <img className="about__picture" src="http://lorempixel.com/100/100" /> */}
                      <p className="about__profName"> Peter Markoski </p>
                      <a className="about__email" href="mailto:peter@public.group?subject=Inquiries"> peter@public.group </a>
                    </div>
                  </div>
                </div>
              </div>
            }
            {this.state.selected === 'process' &&
            <div className="about__main__process">
              <br /><br />
              <p className="about__text"> Through the influence of the media and technology on our world, our lives are increasingly characterized by speed and constant change. We live in a dynamic, data-driven society that is continually sparking new forms of human interaction and social contexts.  Our work focuses on processes that are also products: things that adapt to their environment, emphasize change and show difference. </p>
              <br /><br />
            </div>
            }
            {this.state.selected === 'capabilities' &&
            <div className="about__main__process">
              <br /><br />
              <p className="about__text">Our perspective is that in the modern era design and tech come hand in hand. If either is lacking people will realize subconsciously that something isn’t right. </p>
              <br /><br />
              <p className="about__text">With that in mind we are up to date on the latest design trends, frameworks for web & app development, and technologies for sound design, music, and film editing. </p>
              <br /><br />

              <br /><br />
            </div>
            }

          </div>

        </div>
      </div>
    )
  }
}

export default About;
