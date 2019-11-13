import styled from 'styled-components';

export const Container = styled.div`

    & {
        min-height: 100vh;
        background: #0C0C0C;
    }

    &>.wrapper {
        max-width: 90vw;
        max-width: 1200px;
        min-height: calc(100vh - 75px * 2 - 10px  * 2);
        
        padding: 5vw;
        margin: 0 auto;
    }
    
`;
