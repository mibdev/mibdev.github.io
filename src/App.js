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

ReactGA.initialize('UA-153123707-1', {
    titleCase: false,
    gaOptions: {
        siteSpeedSampleRate: 100,
    }
});

trackPageView(history.location);
updatePageTitle(history.location);

history.listen(location => {
    trackPageView(location);
    updatePageTitle(location);
});

function trackPageView(location) {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
}

function updatePageTitle(location) {
    const titles = {
        "/": "MiB Development Group",
        "/about": "Sobre · MiB Development Group",
        "/projects": "Projetos · MiB Development Group",
        "/team": "Time · MiB Development Group",
        "/contact": "Contato · MiB Development Group",
    }
    document.title = titles[location.pathname] || titles["/"];
};

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
