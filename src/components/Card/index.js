import React from 'react';

import { Container } from './styles';

export default function Card({ image, title, description }) {
    return (
        <Container>
            <img src={image} alt="card-background" />
            <div className="content">
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <p>{description}</p>
                </div>
            </div>
        </Container>
    );
}
