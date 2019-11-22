import React from 'react';

import { Container } from './styles';

import Card from '../../components/Card';
import CardList from '../../components/CardList';

export default function Team() {
    return (
        <Container>
            <div className="animated-container">
                <h1>The <span>team</span></h1>
            </div>
            <CardList>
                <Card
                    image="https://github.com/BrunoS3D.png?size=250"
                    link="https://github.com/BrunoS3D"
                    title="Bruno Silva"
                    description="Bruno estuda de tudo. Fullstacker, entusiasta e um grande admirador do universo Open-Source."
                />
                <Card
                    image="https://github.com/caiodomingues.png?size=250"
                    link="https://github.com/caiodomingues"
                    title="Caio Domingues"
                    description="Caio é apaixonado pela ideologia Open-Source, trabalha para que colaboração torne o mundo um lugar melhor."
                />
                <Card
                    image="https://github.com/mukaschultze.png?size=250"
                    link="https://github.com/mukaschultze"
                    title="Samuel Schultze"
                    description="Samuel é do mal, sinto que se eu fosse escrever algo \"bonitinho\" aqui ele não gostaria."
                />
            </CardList>
        </Container>
    );
}
