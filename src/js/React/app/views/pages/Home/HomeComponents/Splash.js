import React, { Component } from 'react';

class Splash extends Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render(){
    return(
      <div className="splash">
        <div className="splash__content">

          <div className="splash__content__threejs">
            <div id="globe" style={{width: 100, height:100, backgroundColor: 'black', borderRadius: 500}}> </div>
          </div>

          <div className="splash__content__text">
            <div className="splash__content__text__logo">
              <h1 className="splash__h1" id="splashLogo"> PUBLIC.GROUP </h1>
            </div>

            <br/>
            <br/>

            <div className="splash__content__text__paragraph">
              <span className="splash__h2"> We are a design & technology studio based in DC exploring spaces and the people that inhabit them through open dialogue. We work within the tech, design, fashion, music, and cultural sectors building digital & physical experiences. </span>
              <span> <a className="splash__contact"> Contact Us </a> </span>
            </div>

            <br/>
            <br/>

            <div className="splash__content__text__links">
              <span> <a className="splash__links" href="#"> PROCESS </a> </span>
              <span className="splash__links"> / </span>
              <span> <a className="splash__links" href="#"> CAPABILITIES </a> </span>
              <span className="splash__links" href="#"> / </span>
              <span> <a className="splash__links" href="#"> CLIENTS </a> </span>
              <span className="splash__links"> / </span>
              <span> <a className="splash__links" href="#"> LINKS </a> </span>
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
