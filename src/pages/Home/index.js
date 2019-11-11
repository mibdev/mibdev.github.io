import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { Container } from './styles';

import logo from '../../assets/mib_logo.svg';

import AboutUs from '../../components/AboutUs';
import Portfolio from '../../components/Portfolio';

export default function Home({ location }) {

    const [marginTop, setMarginTop] = useState(250);

    useEffect(() => {
        if (location) {
            const path = location.pathname.toLowerCase();
            if (path.includes("about")) {
                setMarginTop(64);
            }
            else if (path.includes("portfolio") || path.includes("team")) {
                setMarginTop(75);
            }
            else {
                setMarginTop(250);
            }
        }
    }, [location]);

    return (
        <Container headerMarginTop={marginTop}>
            <div className="logo-mask">
                <img className="mib-logo" src={logo} alt="mib logo" />
            </div>
            <div className="content">
                <div className="header">
                    <div className="title">
                        <h2>Welcome to</h2>
                        <h1>MiB Development Group</h1>
                    </div>
                    <hr className="separator" />
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home/about-us">Who we are</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/home/portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/home/team">Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">Contact</Link>
                        </li>
                    </ul>
                </div>

                <Switch>
                    <Route path="/home/about-us" component={AboutUs} />
                    <Route path="/home/portfolio" component={Portfolio} />
                </Switch>
            </div>
        </Container>
    );
}
