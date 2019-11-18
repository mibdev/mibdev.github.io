import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';

export default function Menu() {

    return (
        <Container>
            <h1>
                <a className="logo" href="/">Mib</a>
            </h1>
            <div className="nav-items">
                <NavLink className="nav-link" activeClassName="active-nav-link" to="/" exact>Início</NavLink>
                <NavLink className="nav-link" activeClassName="active-nav-link" to="/?p=/about">Sobre</NavLink>
                <NavLink className="nav-link" activeClassName="active-nav-link" to="/?p=/projects">Projetos</NavLink>
                <NavLink className="nav-link" activeClassName="active-nav-link" to="/?p=/team">Time</NavLink>
                <NavLink className="nav-link" activeClassName="active-nav-link" to="/?p=/contact">Contato</NavLink>
            </div>
        </Container>
    );
}
