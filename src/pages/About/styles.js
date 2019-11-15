import styled from 'styled-components';

import { FlexColumnCenter } from '../../styles/FlexColumnCenter';
import { AnimationSlideInFromBottom } from '../../styles/AnimationSlideInFromBottom';

export const Container = styled.div`

    & {
        ${FlexColumnCenter}

        p {
            margin: 32px;
            opacity: 80%;
            line-height: 25px;
        }
    }

    & .content-out {
        width: 100%;
    }

    & .content-in {
        position: absolute;
        
        top: 25vh;
        left: calc(25vw + 5rem);

        width: 50%;
        max-width: 800px;
    }

    & .vertical-content {
        position: fixed;
        
        top: 25vh;
        left: 25vw;
        bottom: -25vh;

        ${FlexColumnCenter}
        justify-content: flex-start;

        ${AnimationSlideInFromBottom}

        background: #fff;

        & h1 {
            color: #000;
            font-weight: 900;
            margin-top: 4rem;
            transform: rotate(-90deg);
        }
    }

`;
