import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Container } from './styles';

// import MemberModal from './components/MemberModal';
import Menu from './components/Menu';
import SkyBackground from './components/SkyBackground';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Contact from './pages/Contact';

export default function App() {
    return (
        <Container>
            <SkyBackground />
            <div className="wrapper">
                <BrowserRouter>
                    <Menu />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/?p=/about" component={About} />
                        <Route path="/?p=/projects" component={Projects} />
                        <Route path="/?p=/team" component={Team} />
                        <Route path="/?p=/contact" component={Contact} />

                        <Redirect from="*" to="/" />
                    </Switch>
                </BrowserRouter>
            </div>
            {/* <MemberModal /> */}
        </Container>
    );
}
