import styled from 'styled-components';

export const Container = styled.div`

    margin-top: 32px;

    &>ul {
        list-style: none;
        display: grid;

        grid-gap: 10px;
        grid-template-columns: 1fr 1fr 1fr;
    }

    &>ul>li {
        width: 150px;
        height: 150px;

        display: flex;
        flex-direction: column;

        &:hover {
            .content>h3 {
                opacity: 0;
                transition: all .5s ease-in-out;
            }
            
            img {
                filter: grayscale(0%);
                transition: all .5s ease-in-out;
            }
        }
    }
    
    &>ul>li>img {
        position: absolute;
        
        width: 150px;
        height: 150px;
        
        filter: grayscale(100%) brightness(0.5);
    }

    &>ul>li>.content {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;

        justify-content: space-between;
    }

    &>ul>li>.content>h3 {
        font-weight: 300;
        font-size: 1.5rem;
        font-family: 'Lato', sans-serif;
        max-width: 50%;
        padding: 10px;
        z-index: 1;
    }

`;
