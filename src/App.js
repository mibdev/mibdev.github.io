import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Container } from './styles';

import Home from './pages/Home';
import About from './pages/About';

export default function App() {
    return (
        <Container>
            <BrowserRouter>
                <Switch>
                    <Route path={["/", "/home"]} component={Home} />
                    <Route path="/about" component={About} />
                </Switch>
            </BrowserRouter>
        </Container>
    );
}
