import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';

export default function Menu() {

    return (
        <Container>
            <h1>
                <a className="logo" href="/">
                    <img src={`${process.env.PUBLIC_URL}/white-logo.svg`} width="64" alt="MiB Development Group White Logo" />
                </a>
            </h1>
            <div className="nav-items">
                <NavLink className="nav-link" activeClassName="active-nav-link" to="/" exact>Início</NavLink>
                <NavLink className="nav-link" activeClassName="active-nav-link" to="/about">Sobre</NavLink>
                <NavLink className="nav-link" activeClassName="active-nav-link" to="/projects">Projetos</NavLink>
                <NavLink className="nav-link" activeClassName="active-nav-link" to="/team">Time</NavLink>
                <NavLink className="nav-link" activeClassName="active-nav-link" to="/contact">Contato</NavLink>
            </div>
        </Container>
    );
}
