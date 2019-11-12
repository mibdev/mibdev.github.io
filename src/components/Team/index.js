import React from 'react';

import { Container } from './styles';

export default function Team() {
    return (
        <Container>
            <ul>
                <li>
                    <div className="content">
                        <img src="/bruno.jpg" alt="bruno" />
                        <h3>Bruno Silva</h3>
                    </div>
                </li>

                <li>
                    <div className="content">
                        <img src="/caio.jpg" alt="caio" />
                        <h3>Caio Domingues</h3>
                    </div>
                </li>

                <li>
                    <div className="content">
                        <img src="/samu.jpg" alt="samu" />
                        <h3>Samuel Schultze</h3>
                    </div>
                </li>
            </ul>
        </Container>
    );
}
