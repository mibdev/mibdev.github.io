import React from 'react';

import { Container } from './styles';

import oldPC from '../../assets/old-pc.png';

export default function Home() {
    return (
        <Container>
            <div className="old-pc">
                <img src={oldPC} alt="old-pc" />
            </div>
            <div className="animated-container">
                <h1>A bunch of <span>friends</span> trying to make cool things</h1>
            </div>
        </Container>
    );
}
