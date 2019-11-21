import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';

import { Container } from './styles';

export default function SocialBar() {
    return (
        <Container>
            <a className="social-icon" href="https://www.facebook.com/mibgamedev" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a className="social-icon" href="https://github.com/mibdev" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a className="social-icon" href="https://discordapp.com/invite/m3q75kU" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faDiscord} size="lg" />
            </a>
        </Container>
    );
}
