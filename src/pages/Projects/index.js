import React from 'react';
import { fadeIn } from 'react-animations';

import { Container } from './styles';

import Cards from '../../components/Cards';
import AnimatedContent from '../../components/AnimatedContent';

export default function Projects() {
    return (
        <Container>
            <AnimatedContent animation={fadeIn}>
                <Cards />
            </AnimatedContent>
        </Container>
    );
}
