import styled from 'styled-components';

export const Container = styled.div`

    & {
        display: flex;
        flex-direction: row;

        flex-wrap: wrap;
        justify-content: center;
        z-index: 0;
    }

    &>.card {
        position: relative;
        overflow: hidden;

        height: 250px;
        max-width: 300px;
        flex: 1;
        flex-shrink: 1;
        flex-basis: 300px;

        margin: 16px;
        
        z-index: 1;

        &:hover {
            &>img {
                transform: scale(1.1);
                filter: grayscale(0%) brightness(0.3) blur(5px);
            }
            &>.content>h1 {
                opacity: 0;
                top: 0%;
            }
            &>.content>p {
                opacity: 1;
                bottom: 50%;
            }
        }
    }

    &>.card>img {
        position: absolute;

        width: 100%;
        
        filter: grayscale(100%) brightness(0.5);
        transition: all 0.3s ease-in-out;

        z-index: -1;
    }

    &>.card>.content {
        width: calc(100% - 32px);
        height: calc(100% - 32px);

        padding: 16px;

        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: space-evenly;
    }

    &>.card>.content>h1 {
        position: absolute;

        color: #fff;
        font-weight: 100;

        top: 50%;
        opacity: 1;

        transition: all 0.3s ease-in-out;
    }
    
    &>.card>.content>p {
        position: absolute;
        
        color: #fff;

        bottom: 0%;
        opacity: 0;

        transition: all 0.3s ease-in-out;
    }

`;
