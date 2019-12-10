import React from 'react';
import FadeIn from 'react-fade-in';

import { Container } from './styles';
import T from 'i18n-react';

export default function About() {
    return (
        <Container>
            <div className="row">
                <div className="vertical-content">
                    <h1><T.text text="about.title" /></h1>
                </div>
                <div className="content">
                    <FadeIn>
                        <T.text text="about.text"/>
                    </FadeIn>
                </div>
            </div>
        </Container>
    );
}
