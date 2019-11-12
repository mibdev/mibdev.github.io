import React from 'react';
import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Team() {
    return (
        <Container>
            <ul>
                <li>
                    <Link className="content" to="/about">
                        <FadeIn>
                            <img src="/bruno.jpg" alt="Bruno" />
                            <h3>Bruno Silva</h3>
                        </FadeIn>
                    </Link>
                </li>

                <li>
                    <Link className="content" to="/about">
                        <FadeIn className="tst">
                            <img src="/caio.jpg" alt="Caio" />
                            <h3>Caio Domingues</h3>
                        </FadeIn>
                    </Link>
                </li>

                <li>
                    <Link className="content" to="/about">
                        <FadeIn>
                            <img src="/samuel.jpg" alt="Samuel" />
                            <h3>Samuel Schultze</h3>
                        </FadeIn>
                    </Link>
                </li>
            </ul>
        </Container>
    );
}