import styled from 'styled-components';

import { FlexColumnCenter } from '../../styles/FlexColumnCenter';
import { AnimationSlideInFromBottom } from '../../styles/AnimationSlideInFromBottom';

export const Container = styled.div`

    & {

        ${FlexColumnCenter}

        ${AnimationSlideInFromBottom}

        p {
            margin-top: 32px;
            opacity: 80%;
            line-height: 25px;
        }
    }

`;
