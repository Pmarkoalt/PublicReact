import React, { Component } from 'react';
// import THREELib from "three-js";
// var THREE = THREELib();

class Splash extends Component{
  constructor(props){
    super(props)
    this.state = {
      images : [
        "/imgs/splash/slide1.jpg",
        "/imgs/splash/slide2.jpg",
        "/imgs/splash/slide3.png",
        "/imgs/splash/slide4.jpg",
      ]
    }
  }


  componentDidMount(){
  }

  render(){
    return(
      <div className="splash">
        <div className="splash__content">
          <div className="splash__content__top">
            <img className="splash__content__top__logo" src="/imgs/util/logo.png" />
          </div>
          <div className="splash__content__mid">
            <img className="splash__content__mid__img" id="splashSlide1" src="/imgs/splash/slide1.jpg" />
            <img className="splash__content__mid__img" id="splashSlide2" src="/imgs/splash/slide2.jpg" />
            <img className="splash__content__mid__img" id="splashSlide3" src="/imgs/splash/slide3.png" />
            <img className="splash__content__mid__img" id="splashSlide4" src="/imgs/splash/slide4.jpg" />
          </div>
          <div className="splash__content__bot">
            <div className="splash__content__bot__paraOne">
              <div>
                <p className="splash__h2"> We are a design & technology studio based in DC exploring spaces and the people that inhabit them through open dialogue. We work within the tech, design, fashion, music, and cultural sectors building digital & physical experiences. </p>
                <a className="splash__contact"><u> Contact Us </u></a>
              </div>

            </div>
            <div className="splash__content__bot__paraTwo">
              <p className="splash__clients"> CLIENTS INCLUDE ADDIDAS, SUNDANCE FILM, FESTIVAL DE CANNES, ARTSY, ART BASEL MIAMI, 1432R, JBG SMITH, & SOTHEBY'S</p>
            </div>
          </div>
        </div>
        <div className="splash__arrowContainer">
          <div className="splash__arrowContainer__arrow"> </div>
        </div>
      </div>
    )
  }
}

export default Splash;
