import React from 'react';
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from './app/App';


const RootHtml = ( ) => (
      <Router>
        <App />
      </Router>
);

render( <RootHtml />, document.getElementById( "app" ) );
