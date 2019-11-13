import styled from 'styled-components';

export const Container = styled.div`

    & {

        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;

        p {
            margin-top: 32px;
            opacity: 80%;
            line-height: 25px;
        }
    }

`;
