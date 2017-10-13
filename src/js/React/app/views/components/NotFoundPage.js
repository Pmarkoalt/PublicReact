import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

class NotFoundPage extends Component{
  constructor(props){
    super(props)
    this.state = {
    }
    this.backAbout = this.backAbout.bind(this);
  }

  backAbout(){
    if (this.props.aboutOpen === true){
      this.props.handleAboutOpen();
    }
  }

  componentDidMount(){
  }


  render(){
    return(
      <div className="notFoundPage">
        <Link to={'/'}> <div className="sideBarContainer back" onClick={this.backAbout}> <div className={"sideBarCircle " + (this.props.aboutOpen && "transparent")}> <img className="x" src="/imgs/util/backWhite.svg" /> <img className={"帰 " + (this.props.aboutOpen && "hidden")} src="/imgs/util/backBlack.svg" /> </div> </div> </Link>
        <h1 className="errorText"> 404 </h1>
      </div>

    )
  }
}

export default NotFoundPage;
