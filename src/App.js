import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import ReactGA from 'react-ga';
import { createBrowserHistory } from "history";

import { Container } from './styles';

// import MemberModal from './components/MemberModal';
import Menu from './components/Menu';
import SkyBackground from './components/SkyBackground';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Contact from './pages/Contact';

const history = createBrowserHistory();

ReactGA.initialize('UA-153123707-1');

// Initialize google analytics page view tracking
history.listen(location => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

export default function App() {
    return (
        <Container>
            <SkyBackground />
            <div className="wrapper">
                <Router history={history}>
                    <Menu />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/team" component={Team} />
                        <Route path="/contact" component={Contact} />

                        <Redirect from="*" to="/" />
                    </Switch>
                </Router>
            </div>
            {/* <MemberModal /> */}
        </Container>
    );
}
