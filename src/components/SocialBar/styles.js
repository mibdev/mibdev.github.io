import styled from 'styled-components';

import { FlexRowCenter } from '../../styles/FlexRowCenter';

export const Container = styled.div`

    & {
        width: 100%;
        
        ${FlexRowCenter}
    }

    &>.social-icon {
        margin: 0 0.25rem;
    }
    
`;
