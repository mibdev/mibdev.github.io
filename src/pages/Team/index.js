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
                    image="https://github.com/gabrieldejesus.png?size=250"
                    link="https://github.com/gabrieldejesus"
                    title="Gabriel de Jesus"
                    description=""
                />
                <Card
                    image="https://github.com/mukaschultze.png?size=250"
                    link="https://github.com/mukaschultze"
                    title="Samuel Schultze"
                    description="Samuel é do mal, sinto que se eu fosse escrever algo 'bonitinho' aqui ele não gostaria."
                />
                 <Card
                    image="https://media.licdn.com/dms/image/C4D03AQErvbKQA2R0ug/profile-displayphoto-shrink_400_400/0/1581970775395?e=1695254400&v=beta&t=ZISFS8yAuyD7xKpAGxkUaPAFAEfUuPiFWQ6hm0VB7sA"
                    link="https://www.linkedin.com/in/tiagogaldeano/"
                    title="Tiago Galdeano"
                    description="Oi Tiago, será que você poderia me dizer qual frase eu deveria escrever aqui?"
                />
            </CardList>
        </Container>
    );
}
