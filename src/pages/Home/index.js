import React from 'react';

import { Container } from './styles';

export default function Home() {
    return (
        <Container>
            <div className="old-pc">
                <img src={`${process.env.PUBLIC_URL}/old-pc.png`} alt="old-pc" />
            </div>
            <div className="animated-container">
                <h1>A bunch of <span>friends</span> trying to make cool things</h1>
                {/* Frase estremamente sem graça traduzida */}
                {/* <h1>Um monte de <span>amigos</span> tentando fazer coisas legais</h1> */}
            </div>
        </Container>
    );
}
