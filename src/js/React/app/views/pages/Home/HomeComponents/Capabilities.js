import React, { Component } from 'react';

class Capabilities extends Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render(){
    return(
      <div className="capabilities">
        <div className="capabilities__content">

          <div className="capabilities__content__nav">
            <div className="capabilities__content__nav__header">
              <h1 className="capabilities__header"> Selected Work </h1>
            </div>
            <div className="capabilities__content__nav__links">
              <span className="capabilities__headLink"> Identities </span>
              <span className="capabilities__headLink"> Interactive </span>
              <span className="capabilities__headLink"> Sound Design </span>
              <span className="capabilities__headLink"> Art Direction </span>
              <span className="capabilities__headLink"> Physical </span>
            </div>
          </div>

          <div className="capabilities__content__gallery">
            <div className="capabilities__content__gallery__item">
              <img src="http://via.placeholder.com/380x200" />
              <h3 className="capabilities__galleryTitle"> Title </h3>
              <h4 className="capabilities__galleryType"> type type </h4>
            </div>
            <div className="capabilities__content__gallery__item">
              <img src="http://via.placeholder.com/250x200" />
              <h3 className="capabilities__galleryTitle"> Title </h3>
              <h4 className="capabilities__galleryType"> type type </h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Capabilities;
