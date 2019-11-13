import React from 'react';

import { Container } from './styles';

export default function AnimatedContent({ children, animation, duration }) {
    return (
        <Container animation={animation || null} duration={duration || null}>
            {children}
        </Container>
    );
}
