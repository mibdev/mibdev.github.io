import React from 'react';

import { Container } from './styles';

import Card from '../../components/Card';
import CardList from '../../components/CardList';

export default function Team() {
    return (
        <Container>
            <div className="animated-container">
                <h1>The <span>guys</span></h1>
            </div>
            <CardList>
                <Card
                    image={`${process.env.PUBLIC_URL}/bruno.jpg`}
                    link="https://github.com/BrunoS3D"
                    title="Bruno Silva"
                    description="Bruno é o cara que estuda de tudo. Fullstacker, entusiasta e é também um grande admirador do universo Open-Source."
                />
                <Card
                    image={`${process.env.PUBLIC_URL}/caio.jpg`}
                    link="https://github.com/caiodomingues"
                    title="Caio Domingues"
                    description="Caio é um apaixonado pelo mundo Open-Source, sente que toda colaboração do tipo pode tornar o mundo um lugar melhor."
                />
                <Card
                    image={`${process.env.PUBLIC_URL}/samuel.jpg`}
                    link="https://github.com/mukaschultze"
                    title="Samuel Schultze"
                    description="Samu é um cara mal sinto que se eu escrever algo 'bonitinho' aqui ele não irá gostar."
                />
            </CardList>
        </Container>
    );
}