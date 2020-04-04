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
                    description="Samuel é do mal, sinto que se eu fosse escrever algo 'bonitinho' aqui ele não gostaria."
                />
                 <Card
                    image="https://instagram.fstu6-1.fna.fbcdn.net/v/t51.2885-15/e35/90491112_142970467109439_7495886393016318936_n.jpg?_nc_ht=instagram.fstu6-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=0i_LLB5VfiUAX_wxldN&oh=55b02b61f44dee258f9ef467b0614f3e&oe=5EB184B2"
                    link="https://www.linkedin.com/in/tiagogaldeano/"
                    title="Tiago Galdeano"
                    description="Oi Tiago, será que você poderia me dizer qual frase eu deveria escrever aqui?"
                />
            </CardList>
        </Container>
    );
}
