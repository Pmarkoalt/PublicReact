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
                    <p className="about__text"> office@public.design </p>
                  </div>
                  {/* <br /><br /> */}
                  <div className="about__main__profile__images">
                    <div className="about__main__profile__images__item">
                      <img className="about__picture" src="http://lorempixel.com/100/100" />
                      <p className="about__profName"> Moustafa Hassan </p>
                      <p className="about__email"> moustafa@public.group </p>
                    </div>
                    <div className="about__main__profile__images__item">
                      <img className="about__picture" src="http://lorempixel.com/100/100" />
                      <p className="about__profName"> Peter Markoski </p>
                      <p className="about__email"> peter@public.group </p>
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
              <div className="about__main__process">
                <p className={"about__link " + (this.state.capabilities === 'design' ? " about__selected " : "")} onClick={() => this.handleCap('design')}> Design </p>
                <p className="about__slash"> / </p>
                <p className={"about__link " + (this.state.capabilities === 'development' ? " about__selected " : "")} onClick={() => this.handleCap('development')}> Development </p>
                <p className="about__slash"> / </p>
                <p className={"about__link " + (this.state.capabilities === 'editing' ? " about__selected " : "")} onClick={() => this.handleCap('editing')}> Editing </p>
              </div>
              <br /><br />
              <p className={"about__text " + (this.state.capabilities !== 'design' ? " about__hide" : "")}> Design: HURR DURR SHAPES COLORS MOUSTAFA WRITE UP SOME BULLSHIT HERE FAM K THANKS </p>
              <p className={"about__text " + (this.state.capabilities !== 'development' ? " about__hide" : "")}> Development: We try to develop all our modern projects with React, Redux, Express, Node, and Mongo. We are firm believer in Google's Progress Web App Philosophy and try to meet said standards when appropriate. We are also experienced with: AngularJS, JQuery, SQL, WordPress, Drupal, API based CMS, Greensock, ThreeJS, and many more libraries used to make web sites for the Web 2.0 generation of the internet </p>
              <p className={"about__text " + (this.state.capabilities !== 'editing' ? " about__hide" : "")}> Editing: We have strong experience working with editing for music and film. Our strengths lie in a strong foundation of the technologies used to create immersive soundtracks. We are able to assist in any capacity for projects utilizing sound. </p>
            </div>
            }

          </div>

        </div>
      </div>
    )
  }
}

export default About;
