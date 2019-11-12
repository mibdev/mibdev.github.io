import React from 'react';
import FadeIn from 'react-fade-in';

import { Container } from './styles';

export default function Portfolio() {
    return (
        <Container>
            <ul>

                <li>
                    <FadeIn>
                        <img src="/bruno.jpg" alt="Bruno" />
                        <div className="content">
                            <h3>Some Random Project</h3>
                        </div>
                    </FadeIn>
                </li>
                <li>
                    <FadeIn>
                        <img src="/samuel.jpg" alt="Samuel" />
                        <div className="content">
                            <h3>Some Random Project</h3>
                        </div>
                    </FadeIn>
                </li>
                <li>
                    <FadeIn>
                        <img src="/caio.jpg" alt="Caio" />
                        <div className="content">
                            <h3>Some Random Project</h3>
                        </div>
                    </FadeIn>
                </li>
                <li>
                    <FadeIn>
                        <img src="/samuel.jpg" alt="Samuel" />
                        <div className="content">
                            <h3>Some Random Project</h3>
                        </div>
                    </FadeIn>
                </li>
                <li>
                    <FadeIn>
                        <img src="/caio.jpg" alt="Caio" />
                        <div className="content">
                            <h3>Some Random Project</h3>
                        </div>
                    </FadeIn>
                </li>
                <li>
                    <FadeIn>
                        <img src="/bruno.jpg" alt="Bruno" />
                        <div className="content">
                            <h3>Some Random Project</h3>
                        </div>
                    </FadeIn>
                </li>
            </ul>
        </Container>
    );
}
