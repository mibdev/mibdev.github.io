import styled from 'styled-components';

export const Container = styled.div`

    margin: 32px 0;
    text-align: justify;
    
    &>.scrollview {
        height: 50vh;
        padding-right: 32px;
        overflow-y: auto;
    }

    &>.scrollview::-webkit-scrollbar {
       width: 7px;
    }

    /* Track */
    &>.scrollview::-webkit-scrollbar-track {
        border-radius: 10px;
        background: #111; 
    }

    /* Handle */
    &>.scrollview::-webkit-scrollbar-thumb {
        background: #222; 
        border-radius: 10px;
    }

    /* Handle on hover */
    &>.scrollview::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }

    p {
        margin-top: 32px;
        opacity: 80%;
        line-height: 25px;
    }
`;
