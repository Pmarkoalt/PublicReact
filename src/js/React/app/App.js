import React, { Component } from 'react';
import { Route, Redirect} from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';

//About Animation file
import {firstChild} from './views/components/helpers.js';
import AnimatedSwitch from './views/components/animated_switch.js';

//Components
import { Audio, Home, Video, Visual } from './views/pages';
import { About } from './views/components';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      aboutOpen: false
    }
    this.handleAboutOpen = this.handleAboutOpen.bind(this);
  }

  handleAboutOpen(event){
    event.preventDefault()
    this.setState({
      aboutOpen: !this.state.aboutOpen
    });
  }



  render(){

    return(
      <main>
        {/* <TransitionGroup>
            { this.state.aboutOpen && <About />}
        </TransitionGroup> */}
        <a onClick={this.handleAboutOpen} className="sideBarContainer"> <div  className="sideBarCircle"> </div> </a>
        { this.state.aboutOpen && <About />}
        <Route
					render={({ location }) => (
						<TransitionGroup component={firstChild}>
							<AnimatedSwitch
								key={location.key}
								location={location}
							>
								<Route exact path="/" component={Home} />
								<Route
									path="/audio/:id"
									render={props => (
										<Audio {...props} />
									)}
								/>
								<Route
									path="/video/:id"
									render={props => (
										<Video {...props} />
									)}
								/>
                <Route
                  path="/visual/:id"
                  render={props => (
                    <Visual {...props} />
                  )}
                />
								{/* <Route component={Missed} /> */}
							</AnimatedSwitch>
						</TransitionGroup>
					)}
				/>

        {/* <Route path='/audio/:id' component={Audio} />
        <Route exact path='/' component={Home} />
        <Route path="/video/:id" component={Video} />
        <Route path='/visual/:id' component={Visual} /> */}
        {/* <Redirect from="*" to="/404" /> */}

      </main>
    )
  }
}

export default App;
