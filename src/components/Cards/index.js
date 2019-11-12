import React from 'react';

import { Container } from './styles';

export default function Cards() {
    return (
        <Container>
            <div className="card">
                <img src="/bruno.jpg" alt="bruno" />
                <div className="content">
                    <h1>Title</h1>
                    <p>Some description...</p>
                </div>
            </div>
            <div className="card">
                <img src="/samuel.jpg" alt="samuel" />
                <div className="content">
                    <h1>Title</h1>
                    <p>Some description...</p>
                </div>
            </div>
            <div className="card">
                <img src="/caio.jpg" alt="caio" />
                <div className="content">
                    <h1>Title</h1>
                    <p>Some description...</p>
                </div>
            </div>
            <div className="card">
                <img src="/samuel.jpg" alt="samuel" />
                <div className="content">
                    <h1>Title</h1>
                    <p>Some description...</p>
                </div>
            </div>
            <div className="card">
                <img src="/caio.jpg" alt="caio" />
                <div className="content">
                    <h1>Title</h1>
                    <p>Some description...</p>
                </div>
            </div>
            <div className="card">
                <img src="/bruno.jpg" alt="bruno" />
                <div className="content">
                    <h1>Title</h1>
                    <p>Some description...</p>
                </div>
            </div>
        </Container>
    );
}
