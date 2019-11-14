import React from 'react';

import { Container } from './styles';

import AnimatedContent from '../../components/AnimatedContent';

export default function Home() {
    return (
        <Container>
            <AnimatedContent>
                <div className="flex-center">
                    <h1>Home</h1>
                    <h1>A bunch of friends trying to make cool things</h1>
                </div>
            </AnimatedContent>
        </Container>
    );
}
