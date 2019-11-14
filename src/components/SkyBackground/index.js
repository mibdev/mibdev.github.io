import React from 'react';
import Particles from 'react-particles-js';

import { Container } from './styles';

export default function SkyBackground() {
    return (
        <Container>
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 2
                        }
                    },
                }} />
        </Container>
    );
}
