import styled from 'styled-components';

import { FlexColumnCenter } from '../../styles/FlexColumnCenter';
import { AnimationSlideInFromBottom } from '../../styles/AnimationSlideInFromBottom';

export const Container = styled.div`

    & {
        ${FlexColumnCenter}
    }

    & h2 {
        max-width: 80%;
        margin-top: 10vh;

        font-size: 5rem;
        font-family: 'Permanent Marker', cursive;

        ${AnimationSlideInFromBottom}
        animation-delay: 0.3s;
    }

    & h2>span {
        color: #000;
        background: #fff;

        padding: 0 1rem;

        font-size: 5rem;
        font-family: 'Permanent Marker', cursive;
    }

    & .old-pc {
        position: fixed;

        bottom: 5vh;
        right: 15vw;

        ${AnimationSlideInFromBottom}

        z-index: 0;
    }

    & .old-pc>img {
        max-width: 40vw;
    }
`;
