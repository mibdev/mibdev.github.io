import React from 'react';
import FadeIn from 'react-fade-in';

import { Container } from './styles';
import T from 'i18n-react';

export default function About() {
    return (
        <Container>
            <div className="row">
                <div className="vertical-content">
                    <T.text text="about.title"/>
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
