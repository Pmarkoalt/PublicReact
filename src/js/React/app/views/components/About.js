import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {TweenMax} from 'gsap';
import ReactTransitionGroup from 'react-transition-group';

class About extends Component{
  constructor(props){
    super(props)
    this.state = {
    }
    this.dom = {};
  }

  componentDidMount(){
    this.dom.root = ReactDOM.findDOMNode(this);
  }

  componentWillEnter(callback){
    const el = this.container;
    TweenMax.fromTo(el, 0.3, {y: -1000, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
  }

  componentWillLeave(callback){
    const el = this.container;
    TweenMax.fromTo(el, 0.3, {y: 0, opacity: 1}, {y: -1000, opacity: 0, onComplete: callback});
  }

  render(){
    return(
      <div className="about" ref={c => this.container = c}>
        <div className="about__left">
          <div className="about__left__info">
            <p className="about__text"> PUBLIC.GROUP </p>
            <p className="about__text"> Washington DC </p>
            <br />
            <p className="about__text"> 1-(555)-555-5555 </p>
            <p className="about__text"> office@public.design </p>
            <br /> <br /> <br />
            <p className="about__text"> For New Business Inquiries Inquiries Please Contact Our Office </p>
          </div>
          <br />
          <div className="about__left__staff">
            <div className="about__left__staff__item">
              <img style={{height: 150, width: 150}} src="http://timmaughanbooks.com/wp-content/uploads/2009/02/akira2.jpg"></img>
              <p className="about__name"> Moustafa Hassan </p>
              <p className="about__text"> MOUSTAFA@PUBLIC.DESIGN </p>
            </div>
            <div className="about__left__staff__item">
              <img style={{height: 150, width: 150}} src="https://vignette.wikia.nocookie.net/akira/images/c/c1/IMG_20150614_162342.jpg/revision/latest?cb=20150614202648"></img>
              <p className="about__name"> Peter Markoski </p>
              <p className="about__text"> PETE@PUBLIC.DESIGN </p>
            </div>
          </div>
        </div>
        <div className="about__right">
          <p className="about__text"> Public is a DC design and branding studio. We believe in delivering timeless work for clients far and wide, big and and small. </p>
          <br />
          <p className="about__text"> We believe that strong work stems from strong relationships. We partner directly with out clients to reach a level of rapport only possible on a small scale. You won't be hearing from out Account Services team-you'll be hearing from us. </p>
          <br />
          <p className="about__text"> We've worked with brands large and small over the years, </p>
          <br />
          <p className="about__text"> Public is a DC design and branding studio. We believe in delivering timeless work for clients far and wide, big and and small. </p>
          <br />
          <p className="about__text"> We believe that strong work stems from strong relationships. We partner directly with out clients to reach a level of rapport only possible on a small scale. You won't be hearing from out Account Services team-you'll be hearing from us. </p>
          <br />
          <p className="about__text"> We've worked with brands large and small over the years, </p>
        </div>
      </div>

    )
  }
}

export default About;
