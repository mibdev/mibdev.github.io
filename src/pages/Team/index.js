import React from 'react';

import { Container } from './styles';

import Card from '../../components/Card';
import CardList from '../../components/CardList';

export default function Team() {
    return (
        <Container>
            <CardList>
                <Card image="/bruno.jpg" title="Bruno Silva" description="Nothing to see." />
                <Card image="/caio.jpg" title="Caio Domingues" description="Caio is passionate about Open Source world, feels like in a mission to help the world runs better." />
                <Card image="/samuel.jpg" title="Samuel Schultze" description="I don't know what to type about Samuel because he looks like a bad boy, so, if I type something cute, probably will not be like him." />
            </CardList>
        </Container>
    );
}