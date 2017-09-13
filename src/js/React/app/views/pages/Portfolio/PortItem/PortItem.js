import React, { Component } from 'react';
import { Link } from "react-router-dom";

class PortItem extends Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render(){
    return(
      <div className="portItem">
        <Link to="/"> <button> HOME </button> </Link>
        <h1> This is a Piece of Art</h1>
      </div>
    )
  }
}

export default PortItem;
