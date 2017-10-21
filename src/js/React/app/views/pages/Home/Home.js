import React, { Component } from 'react';

import {Portfolio, Splash} from './HomeComponents'

class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render(){
    return(
      <div className="home">
        <Splash />
        <Portfolio handleAboutOpen={this.props.handleAboutOpen} aboutOpen={this.props.aboutOpen} handlePlaying={this.props.handlePlaying} />
      </div>

    )
  }
}

export default Home;
