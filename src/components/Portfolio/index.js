import React from 'react';

import { Container } from './styles';

export default function Portfolio() {
    return (
        <Container>
            <ul>
                <li>
                    <img src="/bruno.jpg" alt="bruno" />
                    <div className="content">
                        <h3>Some Random Project</h3>
                    </div>
                </li>
                <li>
                    <img src="/samu.jpg" alt="samu" />
                    <div className="content">
                        <h3>Some Random Project</h3>
                    </div>
                </li>
                <li>
                    <img src="/caio.jpg" alt="caio" />
                    <div className="content">
                        <h3>Some Random Project</h3>
                    </div>
                </li>
                <li>
                    <img src="/samu.jpg" alt="samu" />
                    <div className="content">
                        <h3>Some Random Project</h3>
                    </div>
                </li>
                <li>
                    <img src="/caio.jpg" alt="caio" />
                    <div className="content">
                        <h3>Some Random Project</h3>
                    </div>
                </li>
                <li>
                    <img src="/bruno.jpg" alt="bruno" />
                    <div className="content">
                        <h3>Some Random Project</h3>
                    </div>
                </li>
            </ul>
        </Container>
    );
}
