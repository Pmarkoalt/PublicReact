import React, { Component } from 'react';

class Identities extends Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render(){
    return(
      <div className="capabilities__content__gallery">
        <div className="capabilities__content__gallery__item">
          <img src="http://via.placeholder.com/380x200" />
          <h3 className="capabilities__galleryTitle"> Identities </h3>
          <h4 className="capabilities__galleryType"> type type </h4>
        </div>
        <div className="capabilities__content__gallery__item">
          <img src="http://via.placeholder.com/250x200" />
          <h3 className="capabilities__galleryTitle"> Title </h3>
          <h4 className="capabilities__galleryType"> type type </h4>
        </div>
      </div>
    )
  }
}

export default Identities;