import styled from 'styled-components';

import { FlexColumnCenter } from '../../styles/FlexColumnCenter';

export const Container = styled.div`

    & {

        ${FlexColumnCenter}

        p {
            margin-top: 32px;
            opacity: 80%;
            line-height: 25px;
        }
    }

`;
