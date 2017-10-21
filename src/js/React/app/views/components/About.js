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
    TweenMax.fromTo(el, 0.3, {height: '0vh'}, {height: '100vh', onComplete: callback});

  }

  componentWillLeave(callback){
    const el = this.container;
    TweenMax.fromTo(el, 0.3, {height: '100vh'}, {height: '0vw', onComplete: callback});
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
                <p className="about__text"> Public is a DC design and branding studio. We believe in delivering timeless work for clients far and wide, big and small. </p>
                <br /><br />
                <p className="about__text"> We believe that strong work stems from strong relationships. We partner directly with our clients to reach a level of rapport only possible on a small scale. You won't be hearing from our Account Services team-you'll be hearing from us. </p>
                <br /><br />
                <p className="about__text"> For New Buisness Inquiries Please Contact Our Office </p>
                <br /><br />
                <p className="about__text"> PUBLIC.GROUP </p>
                <p className="about__text"> Washington DC </p>
                <br />
                <p className="about__text"> 1-(555)-555-5555 </p>
                <p className="about__text"> office@public.design </p>
                <br /><br />
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
            }
            {this.state.selected === 'process' &&
            <div className="about__main__process">
              <br /><br />
              <p className="about__text"> Our team’s diverse experiences and skillsets gives us an ability to approach each project not only from an artistic perspective, but also from a technical one. We are able to tackle tasks in a practical manner to avoid compromises being made for a small facet of the final product. </p>
              <br /><br />
              <p className="about__text"> From the moment we are officially in business together we are on the clock 24/7. If you have any questions, concerns, or last minutes changes you can call or email us anytime.</p>
              <br /><br />
              <p className="about__text"> We are passionate about the work we do and want to make sure you feel that same way about the final deliverable product. </p>

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
