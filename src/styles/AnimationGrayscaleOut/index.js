import { css } from 'styled-components';

export const AnimationGrayscaleOut = css`
    
    filter: grayscale(100%);
    animation: 0.75s ease-in-out forwards 0s 1 grayscaleOut;
    
    @keyframes grayscaleOut {
        0% {
            filter: grayscale(100%);
        }
        100% {
            filter: grayscale(0%);
        }
    }

`;
