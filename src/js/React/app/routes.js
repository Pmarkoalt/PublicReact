import React from 'react'
import { Route, IndexRoute } from 'react-router-dom'
import { Audio, Home, Video, Visual } from './views/pages';
import { About, NotFoundPage } from './views/components';
import App from './App';

const routes = () => (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path='/audio/:id' component={Audio} />
    <Route path="/video/:id" component={Video} />
    <Route path='/visual/:id' component={Visual} />
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
