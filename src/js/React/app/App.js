import React, { Component } from 'react';
import { Route, Redirect} from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';


//Components
import { Audio, Home, Video, Visual } from './views/pages';
import { About, NotFoundPage, AnimatedSwitch } from './views/components';
import AppData from "./App.data.js"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      aboutOpen: false,
      projects: AppData
    }
    this.handleAboutOpen = this.handleAboutOpen.bind(this);
  }

  handleAboutOpen(event){
    this.setState({
      aboutOpen: !this.state.aboutOpen
    });
    window.scrollTo(0,0);
  }



  render(){

    return(
      <main>
        {/* <TransitionGroup>
            { this.state.aboutOpen && <About />}
        </TransitionGroup> */}
        <a onClick={this.handleAboutOpen} className="sideBarContainer"> <div className={"sideBarCircle " + (this.state.aboutOpen && "transparent")}> <img className="x" src="/imgs/util/x.svg" /> <p className={"助 " + (this.state.aboutOpen && "hidden")}> 助 </p> </div> </a>
        <TransitionGroup>
          { this.state.aboutOpen && <About />}
        </TransitionGroup>
        <Route
					render={({ location }) => (
						<TransitionGroup>
							<AnimatedSwitch
								key={location.key}
								location={location}
							>
								<Route exact path="/" component={Home} />
								<Route
									path="/audio/:id"
									render={props => (
										<Audio {...props} handleAboutOpen={this.handleAboutOpen} aboutOpen={this.state.aboutOpen} projects={this.state.projects} />
									)}
								/>
								<Route
									path="/video/:id"
									render={props => (
										<Video {...props} handleAboutOpen={this.handleAboutOpen} aboutOpen={this.state.aboutOpen} projects={this.state.projects} />
									)}
								/>
                <Route
                  path="/visual/:id"
                  render={props => (
                    <Visual {...props} handleAboutOpen={this.handleAboutOpen} aboutOpen={this.state.aboutOpen} projects={this.state.projects} />
                  )}
                />
								<Route render={props => (
                   <NotFoundPage {...props} handleAboutOpen={this.handleAboutOpen} aboutOpen={this.state.aboutOpen} />
                  )}
                />
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
