import styled from 'styled-components';

import { AnimationSlideInFromBottom } from '../../styles/AnimationSlideInFromBottom';

export const Container = styled.div`

    & {
        display: flex;
        flex-direction: row;

        align-items: center;
        justify-content: center;

        ${AnimationSlideInFromBottom}
    }

`;
