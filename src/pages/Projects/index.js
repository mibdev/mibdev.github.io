import React from 'react';

import { Container } from './styles';

import Card from '../../components/Card';
import CardList from '../../components/CardList';

export default function Projects() {
    return (
        <Container>
            <CardList>
                <Card
                    image={`${process.env.PUBLIC_URL}/hackatomic.jpg`}
                    link="https://hackatomic.com/"
                    title="Hackatomic"
                    description="Conecte-se com pessoas ao redor do mundo e crie enquanto corre contra o tempo, conheça novas pessoas e divirta-se! E o melhor: é tudo de graça."
                />
                <Card
                    image={`${process.env.PUBLIC_URL}/eh.jpg`}
                    link="https://assetstore.unity.com/packages/tools/utilities/enhanced-hierarchy-2-0-44322/"
                    title="Enhanced Hierarchy 2.0"
                    description="O Enhanced Hierarchy 2.0 otimiza muito o seu fluxo de trabalho e economiza milhares de cliques, tornando as propriedades do GameObjects que você usa mais acessíveis diretamente na sua hierarquia."
                />
                <Card
                    image={`${process.env.PUBLIC_URL}/fullscreen.jpg`}
                    link="https://assetstore.unity.com/packages/tools/utilities/fullscreen-editor-69534/"
                    title="Fullscreen Editor"
                    description="Deseja jogar seu jogo em tela cheia sem construí-lo? Deseja editar sua cena em tela cheia? Agora você pode!"
                />
                <Card
                    image={`${process.env.PUBLIC_URL}/searchpro.jpg`}
                    link="https://assetstore.unity.com/packages/tools/utilities/search-pro-148040/"
                    title="Search PRO"
                    description="Uma ferramenta de busca de arquivos em Unity para facilitar o desenvolvimento de jogos e aumentar sua produtividade."
                />
            </CardList>
        </Container>
    );
}
