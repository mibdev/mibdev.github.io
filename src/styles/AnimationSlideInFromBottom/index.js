import { css } from 'styled-components';

export const AnimationSlideInFromBottom = css`
    
    opacity: 0;
    animation: 0.5s ease-in-out forwards 0s 1 slideInFromBottom;
    
    @keyframes slideInFromBottom {
        0% {
            opacity: 0;
            transform: translateY(10vh);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

`;
