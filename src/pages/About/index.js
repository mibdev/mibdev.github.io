import React from 'react';
import FadeIn from 'react-fade-in';

import { Container } from './styles';

export default function About() {
    return (
        <Container>
            <div className="row">
                <div className="vertical-content">
                    <h1>Sobre</h1>
                </div>
                <div className="content">
                    <FadeIn>
                        <p>
                            O Made in Brazil Development Group, mais conhecido como MiB Dev, foi criado no final de 2014, na união dos nossos co-fundadores Caio Domingues, Tiago Galdeano e Samuel Schultze.
                        </p>
                        <p>
                            Nos unimos por uma paixão em comum: jogos. O MiB nasceu como uma desenvolvedora independente de jogos e lançou seu primeiro jogo em 2015, o Sonar, que ficou disponível para Android.
                        </p>
                        <p>
                            Com a entrada de um novo integrante, Bruno Silva, o MiB fortaleceu ainda mais suas bases de desenvolvimento em jogos, principalmente em Unity. Bruno e Samuel já foram responsáveis por plugins e extensões de grande uso e relevância dentro da comunidade da Unity.
                        </p>
                        <p>
                            Atualmente, o MiB expande constantemente suas áreas de desenvolvimento, passando tanto no desenvolvimento de web apps a utilitários e jogos, possuindo ainda, conhecimento em outros setores conectados à computação, seja agrícola, industrial, comercial ou residencial.
                        </p>
                        <p>
                            Que tal nos dar uma chance para mostrar que podemos superar as suas expectativas? =]
                        </p>
                    </FadeIn>
                </div>
            </div>
        </Container>
    );
}
