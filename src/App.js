import React from 'react';

import { Container } from './styles';

import Menu from './components/Menu';
import Cards from './components/Cards';

export default function App() {
    return (
        <Container>
            <Menu />
            <Cards />
        </Container>
    );
}
