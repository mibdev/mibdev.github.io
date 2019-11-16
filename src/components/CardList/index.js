import React from 'react';

import { Container } from './styles';

export default function CardList({ children }) {
    return (
        <Container>
            {children}
        </Container>
    );
}
