import styled from 'styled-components';

export const Container = styled.div`

    margin: 64px 0;

    &>ul {
        display: flex;
        flex-direction: row;

        align-items: center;
        justify-content: space-evenly;

        list-style: none;

        &>li {
            padding: 15px;
            text-align: center;
        }
    }
    
    &>ul>li>.content {
        cursor: pointer;
        text-decoration: none;

        display: flex;
        flex-direction: column;
        
        align-items: center;
        justify-content: center;

        &:hover {
            img {
                filter: grayscale(0%);
            }
        }
    }
    
    /* alinhamento para o FadeIn component */
    &>ul>li>.content div {
        display: flex;
        flex-direction: column;
        
        align-items: center;
        justify-content: center;
    }

    &>ul>li>.content img {
      
        width: 150px;    
        height: 150px;

        transition: all .5s ease-in-out;
        filter: grayscale(100%) brightness(0.5);
    }

     &>ul>li>.content h3 {
        margin-top: 10px;
        max-width: 50%;
        font-weight: 100;
        font-family: 'Fira Code', monospace;
        opacity: 80%;
    }

`;
