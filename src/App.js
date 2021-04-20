//Components + routing
import Navigation from './components/Navigation';
import Home from './components/Home';
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import * as ROUTES from './constants/routes'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Style
import { GlobalStyles } from './style/mainStyles';

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
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
