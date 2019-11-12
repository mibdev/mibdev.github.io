import React from 'react';

import { Container } from './styles';

export default function Menu() {
    return (
        <Container>
            <h1>
                <a className="logo" href="/">Mib</a>
            </h1>
            <div className="nav-items">
                <a class="nav-link active-nav-link" href="/">Home</a>
                <a class="nav-link" href="/about">About</a>
                <a class="nav-link" href="/projects">Projects</a>
                <a class="nav-link" href="/team">Team</a>
                <a class="nav-link" href="/contact">Contact</a>
            </div>
        </Container>
    );
}
