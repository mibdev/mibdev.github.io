import React from 'react';
import { SocialIcon } from 'react-social-icons';

import { Container } from './styles';

export default function SocialBar() {
    return (
        <Container>
            <SocialIcon
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                network="facebook" bgColor="#fff" fgColor="#0C0C0C"
                url="https://www.facebook.com/mibgamedev"
            />
            <SocialIcon
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                network="github" bgColor="#fff" fgColor="#0C0C0C"
                url="https://github.com/mibdev"
            />
            <SocialIcon
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                network="discord" bgColor="#fff" fgColor="#0C0C0C"
                url="https://discord.com/mibdev"
            />
        </Container>
    );
}
