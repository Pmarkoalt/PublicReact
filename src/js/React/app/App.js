import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Redirect } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';

//About Animation file
import animation from './views/components/About.animation';

//Components
import { Audio, Home, Video, Visual } from './views/pages';
import { About } from './views/components';

class App extends Component {
  constructor(props){
    super(props)
    this.dom = {}
    this.state = {
      aboutOpen: false
    }
    this.handleAboutOpen = this.handleAboutOpen.bind(this);
  }

  componentDidMount(){
    this.dom.root = ReactDOM.findDOMNode(this);
  }

  componentWillEnter(cb){
    animation.show(this.dom.root, cb);
    console.log(this.dom.root);
  }

  componentWillLeave(cb){
    animation.hide(this.dom.root, cb);
    console.log(this.dom.root);
  }

  handleAboutOpen(event){
    event.preventDefault()
    if (this.state.aboutOpen === false){
      return this.setState({aboutOpen: true});
    }
    else this.setState({aboutOpen: false});
  }



  render(){
    const duration = 500;

    return(
      <div>
      <main>
        {/* <TransitionGroup>
            { this.state.aboutOpen && <About />}
        </TransitionGroup> */}
        <a onClick={this.handleAboutOpen} className="sideBarContainer"> <div  className="sideBarCircle"> </div> </a>
        <Route path='/audio/:id' component={Audio} />
        <Route exact path='/' component={Home} />
        <Route path="/video/:id" component={Video} />
        <Route path='/visual/:id' component={Visual} />
        {/* <Redirect from="*" to="/404" /> */}
      </main>
    </div>
    )
  }

}

export default App;
