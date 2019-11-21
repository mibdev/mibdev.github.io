import styled from 'styled-components';

import { FlexRowCenter } from '../../styles/FlexRowCenter';

export const Container = styled.div`

    & {
        width: 100%;
        
        ${FlexRowCenter}
    }

    &>.social-icon {
        width: 3rem;
        height: 3rem;
        
        margin: 0 0.25rem;
        
        background: #fff;
        border-radius: 50%;

        ${FlexRowCenter}

        transition: all 0.2s;

        & * {
            fill: #0C0C0C;
        }

        &:hover {
            transform: translateY(-0.5rem);
        }
    }
    
`;
