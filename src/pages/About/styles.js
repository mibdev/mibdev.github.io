import styled from 'styled-components';

import { FlexColumnCenter } from '../../styles/FlexColumnCenter';
import { AnimationSlideInFromBottom } from '../../styles/AnimationSlideInFromBottom';

export const Container = styled.div`

    & {
        width: 100%;

        ${FlexColumnCenter}

        p {
            margin: 32px;
            opacity: 80%;
            line-height: 25px;
        }
    }

    &>.row {
        width: 100%;

        display: flex;
        flex-direction: row;

        justify-content: flex-end;
    }

    &>.row>.content {
        width: 70%;
    }

    &>.row>.vertical-content {
        position: fixed;

        height: 100%;
        left: calc(50% - 600px + 15rem);

        ${FlexColumnCenter}
        justify-content: flex-start;

        ${AnimationSlideInFromBottom}

        background: #fff;

        &>h1 {
            color: #000;
            font-weight: 900;
            margin-top: 4rem;
            transform: rotate(-90deg);
        }
    }

`;
