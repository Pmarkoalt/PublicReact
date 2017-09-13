import React from 'react'
import { Route, Switch } from 'react-router-dom'

import FullPortfolio from './FullPortfolio'
import PortItem from './PortItem'

const Portfolio = ({match}) => (
  <Switch>
    <Route exact path={`${match.url}`} component={FullPortfolio}/>
    <Route path={`${match.url}/:id`} component={PortItem}/>
  </Switch>
)

export default Portfolio;
