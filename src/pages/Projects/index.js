import React from 'react';

import { Container } from './styles';

import Card from '../../components/Card';
import CardList from '../../components/CardList';

export default function Projects() {
    return (
        <Container>
            <CardList>
                <Card image="/hackatomic-social.png" title="Hackatomic" description="Conecte-se com pessoas ao redor do mundo e crie enquanto corre contra o tempo, conheça novas pessoas e divirta-se! E o melhor: é tudo de graça." />
                <Card image="/hackatomic-social.png" title="Hackatomic" description="Conecte-se com pessoas ao redor do mundo e crie enquanto corre contra o tempo, conheça novas pessoas e divirta-se! E o melhor: é tudo de graça." />
                <Card image="/hackatomic-social.png" title="Hackatomic" description="Conecte-se com pessoas ao redor do mundo e crie enquanto corre contra o tempo, conheça novas pessoas e divirta-se! E o melhor: é tudo de graça." />
                <Card image="/hackatomic-social.png" title="Hackatomic" description="Conecte-se com pessoas ao redor do mundo e crie enquanto corre contra o tempo, conheça novas pessoas e divirta-se! E o melhor: é tudo de graça." />
                <Card image="/hackatomic-social.png" title="Hackatomic" description="Conecte-se com pessoas ao redor do mundo e crie enquanto corre contra o tempo, conheça novas pessoas e divirta-se! E o melhor: é tudo de graça." />
                <Card image="/hackatomic-social.png" title="Hackatomic" description="Conecte-se com pessoas ao redor do mundo e crie enquanto corre contra o tempo, conheça novas pessoas e divirta-se! E o melhor: é tudo de graça." />
            </CardList>
        </Container>
    );
}
