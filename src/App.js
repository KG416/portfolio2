import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Projects from './Components/Projects'
import About from './Components/About'
import Contact from './Components/Contact'

import * as ROUTES from './constants/routes'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>

        <Navigation />

        <Switch>
          <Route path={ROUTES.HOME} exact component={Home} />
          <Route path={ROUTES.PROJECTS} component={Projects} />
          <Route path={ROUTES.ABOUT} component={About} />
          <Route path={ROUTES.CONTACT} component={Contact} />
        </Switch>

      </Router>

    </>
  );
}

export default App;
