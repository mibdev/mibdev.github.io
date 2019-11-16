import styled from 'styled-components';

import { FlexColumnCenter } from '../../styles/FlexColumnCenter';
import { AnimationGrayscaleOut } from '../../styles/AnimationGrayscaleOut';
import { AnimationSlideInFromBottom } from '../../styles/AnimationSlideInFromBottom';

export const Container = styled.div`

    & {
        ${FlexColumnCenter}
    }

    & .animated-container {
        ${FlexColumnCenter}
        ${AnimationSlideInFromBottom}
        animation-delay: 0.3s;
    }

    & h1 {
        max-width: 80%;
        margin-top: 5vh;

        font-size: 5rem;
        font-family: 'Permanent Marker', cursive;
    }

    & h1>span {
        color: #000;
        background: #fff;

        padding: 0 1rem;
 
        font-size: 5rem;
        font-family: 'Permanent Marker', cursive;
    }

    & .old-pc {
        position: fixed;

        top: 20vh;
        right: 15vw;

        ${AnimationSlideInFromBottom}

        z-index: 0;
    }

    & .old-pc>img {
        max-width: 40vw;

        ${AnimationGrayscaleOut}
        animation-delay: 1s;
    }
`;
