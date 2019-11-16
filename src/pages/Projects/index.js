import React from 'react';

import { Container } from './styles';

import Card from '../../components/Card';
import CardList from '../../components/CardList';

export default function Projects() {
    return (
        <Container>
            <CardList>
                <Card image={`${process.env.PUBLIC_URL}/hackatomic.jpg`} title="Hackatomic" description="Conecte-se com pessoas ao redor do mundo e crie enquanto corre contra o tempo, conheça novas pessoas e divirta-se! E o melhor: é tudo de graça." />
                <Card image={`${process.env.PUBLIC_URL}/hackatomic.jpg`} title="Hackatomic" description="Conecte-se com pessoas ao redor do mundo e crie enquanto corre contra o tempo, conheça novas pessoas e divirta-se! E o melhor: é tudo de graça." />
                <Card image={`${process.env.PUBLIC_URL}/hackatomic.jpg`} title="Hackatomic" description="Conecte-se com pessoas ao redor do mundo e crie enquanto corre contra o tempo, conheça novas pessoas e divirta-se! E o melhor: é tudo de graça." />
                <Card image={`${process.env.PUBLIC_URL}/hackatomic.jpg`} title="Hackatomic" description="Conecte-se com pessoas ao redor do mundo e crie enquanto corre contra o tempo, conheça novas pessoas e divirta-se! E o melhor: é tudo de graça." />
                <Card image={`${process.env.PUBLIC_URL}/hackatomic.jpg`} title="Hackatomic" description="Conecte-se com pessoas ao redor do mundo e crie enquanto corre contra o tempo, conheça novas pessoas e divirta-se! E o melhor: é tudo de graça." />
                <Card image={`${process.env.PUBLIC_URL}/hackatomic.jpg`} title="Hackatomic" description="Conecte-se com pessoas ao redor do mundo e crie enquanto corre contra o tempo, conheça novas pessoas e divirta-se! E o melhor: é tudo de graça." />
            </CardList>
        </Container>
    );
}
