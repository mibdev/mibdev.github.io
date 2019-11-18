import styled from 'styled-components';

import { FlexRowCenter } from '../../styles/FlexRowCenter';
import { FlexColumnCenter } from '../../styles/FlexColumnCenter';

export const Container = styled.div`

    & {
        position: fixed;

        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        background: rgba(0, 0, 0, 0.7);

        ${FlexColumnCenter}
    }

    & .window {
        width: 100%;
        height: 100%;

        max-width: 900px;
        max-height: 80%;

        margin: 3rem;
        padding: 3rem;

        background: #111;
        /* background: #fff; */
    }

    & .row {
        display: flex;
        flex-direction: row;
    }

    & .right-content {
        margin-left: 3rem;
        ${FlexColumnCenter}
    }

    & .avatar {
        width: 50%;
        margin-bottom: 3rem;
        
        transform: translate(1.25rem);
        box-shadow: -1rem 1rem 0 #111, -1.25rem 1.25rem 0 #fff;

        transition: all 0.3s;

        &:hover {
            box-shadow: 0 0 0 #111, 0 0 0 #fff;
            transform: translate(0);
        }
    }
`;
