import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'
import TeamMatches from './components/TeamMatches'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/ipl_dashboard/" component={Home} />
    <Route
      exact
      path="/ipl_dashboard/team-matches/:id"
      component={TeamMatches}
    />
    <Route component={NotFound} />
  </Switch>
)

export default App
