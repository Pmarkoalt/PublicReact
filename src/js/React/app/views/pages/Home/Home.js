import React, { Component } from 'react';

import {Capabilities, Clients, Links, Process, Splash} from './HomeComponents'

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
        <Process />
        <Capabilities />
        <Clients />
        <Links />
      </div>

    )
  }
}

export default Home;
