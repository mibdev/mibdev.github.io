import styled from 'styled-components';

import { FlexColumnCenter } from '../../styles/FlexColumnCenter';
import { AnimationSlideInFromBottom } from '../../styles/AnimationSlideInFromBottom';

export const Container = styled.div`

    & {
        ${FlexColumnCenter}
        ${AnimationSlideInFromBottom}

    }

    &>.animated-container {
        margin-bottom: 1rem;
        
        ${AnimationSlideInFromBottom}
        animation-delay: 0.3s;

        &>h1 {
            margin-bottom: 1.5rem;
            transform: rotate(-5deg);

            font-size: 4rem;
            font-family: 'Permanent Marker', cursive;
        }

        &>h1>span {
            color: #000;
            background: #fff;

            padding: 0 1rem;
    
            font-size: 4rem;
            font-family: 'Permanent Marker', cursive;
        }
    }

`;
