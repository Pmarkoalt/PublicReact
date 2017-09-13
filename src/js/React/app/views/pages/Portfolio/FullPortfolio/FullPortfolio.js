import React, { Component } from 'react';
import { Link } from "react-router-dom";

class FullPortfolio extends Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render(){
    return(
      <div className="fullPortfolio">
        <Link to="/"> <button> HOME </button> </Link>
        <h1> This is a List of Art</h1>
      </div>
    )
  }
}

export default FullPortfolio;
