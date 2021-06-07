//Components + routing
import Navigation from './Navigation';
import Home from './Home';
import Projects from './projects/Projects'
import About from './about/About'
import Contact from './Contact'
import * as ROUTES from '../constants/routes'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Style
import { GlobalStyles } from '../style/mainStyles';
import { ThemeProvider } from 'styled-components/macro';
import { useMainContext } from '../MainContext';
import StyledContainer from '../style/Container';

function App() {
  const { theme, lightTheme, darkTheme } = useMainContext();

  return (
    <>
      <Router>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <GlobalStyles />
          <Navigation />
          <StyledContainer>
            {/*     <PageWrapper> */}
            <Switch>
              <Route path={ROUTES.HOME} exact component={Home} />
              <Route path={ROUTES.PROJECTS} component={Projects} />
              <Route path={ROUTES.ABOUT} component={About} />
              <Route path={ROUTES.CONTACT} component={Contact} />
            </Switch>
            {/*  </PageWrapper> */}
          </StyledContainer>
        </ThemeProvider>
      </Router>

    </>
  );
}

export default App;
