import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class NotFoundPage extends Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }

  componentDidMount(){
  }


  render(){
    return(
      <div className="notFoundPage">
        <h1> 404 </h1>
      </div>

    )
  }
}

export default NotFoundPage;
