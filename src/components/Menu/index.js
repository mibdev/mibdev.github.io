import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';

export default function Menu({ location }) {

    return (
        <Container>
            <h1>
                <a className="logo" href="/">Mib</a>
            </h1>
            <div className="nav-items">
                <NavLink className="nav-link" activeClassName="active-nav-link" to="/mib-dev">Home</NavLink>
                <NavLink className="nav-link" activeClassName="active-nav-link" to="/about">About</NavLink>
                <NavLink className="nav-link" activeClassName="active-nav-link" to="/projects">Projects</NavLink>
                <NavLink className="nav-link" activeClassName="active-nav-link" to="/team">Team</NavLink>
                <NavLink className="nav-link" activeClassName="active-nav-link" to="/contact">Contact</NavLink>
            </div>
        </Container>
    );
}
