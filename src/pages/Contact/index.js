import React, { useState } from 'react';

import { Container } from './styles';

import SocialBar from '../../components/SocialBar';

export default function Contact() {
  return (
    <Container>
      <div className="row">
        <div className="left-content">
          <div className="animated-container">
            <h1>
              Join to our <span>community</span>
            </h1>
          </div>
          <img src={`${process.env.PUBLIC_URL}/telephone.png`} alt="telephone" />
        </div>
        <div className="column">
          <SocialBar />
          <iframe
            title="discord"
            src="https://discord.com/widget?id=507953868907479061&theme=dark"
            width="350"
            height="500"
            allowtransparency="true"
            frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          />
        </div>
      </div>
    </Container>
  );
}
