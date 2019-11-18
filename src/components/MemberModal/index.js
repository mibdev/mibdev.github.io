import React from 'react';

import { Container } from './styles';

export default function MemberModal() {
    return (
        <Container>
            <div className="window">
                <div className="top-content">
                    <h4>{"<<"}</h4>
                </div>
                <div className="row">
                    <div className="left-content">
                        <h1>Bruno Silva</h1>
                        <hr />
                        <h2>Bruno é o cara que estuda de tudo. Fullstacker, entusiasta e é também um grande admirador do universo Open-Source.</h2>
                    </div>
                    <div className="right-content">
                        <img className="avatar" src={`${process.env.PUBLIC_URL}/bruno.jpg`} alt="bruno" />
                        <h4>Developer</h4>
                        <h3>Bruno é o cara que estuda de tudo. Fullstacker, entusiasta e é também um grande admirador do universo Open-Source.</h3>
                    </div>
                </div>
            </div>
        </Container>
    );
}
