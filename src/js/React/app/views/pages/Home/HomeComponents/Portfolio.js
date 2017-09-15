import React, { Component } from 'react';

import {All, ArtDirection, Identities, Interactive, Physical, SoundDesign} from '../PortfolioComponents';

class Portfolio extends Component{
  constructor(props){
    super(props)
    this.state = {
      all: true,
      identities: false,
      interactive: false,
      soundDesign: false,
      artDirection: false,
      physical: false
    }
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(event){
    this.setState({all: false, identities: false, interactive: false, soundDesign: false, artDirection: false, physical: false});
    this.setState({ [event.target.id] : true});
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
              <span id="all" className="capabilities__headLink" onClick={this.handleFilter}> All </span>
              <span id="identities" className="capabilities__headLink" onClick={this.handleFilter}> Identities </span>
              <span id="interactive" className="capabilities__headLink" onClick={this.handleFilter}> Interactive </span>
              <span id="soundDesign" className="capabilities__headLink" onClick={this.handleFilter}> Sound Design </span>
              <span id="artDirection" className="capabilities__headLink" onClick={this.handleFilter}> Art Direction </span>
              <span id="physical" className="capabilities__headLink" onClick={this.handleFilter}> Physical </span>
            </div>
          </div>

          {this.state.all && <All /> }
          {this.state.identities && <Identities />}
          {this.state.interactive && <Interactive />}
          {this.state.soundDesign && <SoundDesign />}
          {this.state.artDirection && <ArtDirection />}
          {this.state.physical && <Physical />}

        </div>
      </div>
    )
  }
}

export default Portfolio;
