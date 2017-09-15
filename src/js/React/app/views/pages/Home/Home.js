import React, { Component } from 'react';
import {StickyContainer} from 'react-sticky';

import {Portfolio, Clients, Links, Process, Splash} from './HomeComponents'

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
        <StickyContainer>
          <Portfolio />
        </StickyContainer>
        <Process />
        <Clients />
        <Links />
      </div>

    )
  }
}

export default Home;
