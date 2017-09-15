import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom'
import Menu  from 'react-burger-menu/lib/menus/slide'

import { Home, Portfolio } from './views/pages'


class App extends Component {
  constructor(props){
    super(props)
  }

  showSettings (event) {
  event.preventDefault();
  }

  render(){
    return(
      <div>
      <main>
        

        {/* <Menu right>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </Menu> */}
        {/* <div className="universalHeader">
           <img className="universalHeader__logo" src="/images/logo.png" />
           <div id="universalHeader__navbar">
             <Link to="/"> <button> home </button> </Link>
             <Link to="/blog"> <button> blog </button> </Link>
             <Link to="/releases"> <button> releases </button> </Link>
             <Link to="/contact"> <button> contact </button> </Link>
           </div>
        </div> */}
        {/* <button id="jqueryTest"> Jquery Test </button> */}

        <Route exact path='/' component={Home} />
        <Route path="/portfolio" component={Portfolio} />
      </main>
    </div>
    )
  }

}

export default App;
