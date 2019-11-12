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
        flex: 1;
        flex-basis: 300px;

        margin: 16px;
        
        background: #eee;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

        z-index: 1;

        &:hover {
            &>img {
                transform: scale(1.1);
                filter: grayscale(0%) brightness(0.4) blur(5px);
            }
        }
    }

    &>.card>img {
        position: absolute;

        top: -25%;
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

        justify-content: space-between;
    }

    &>.card>.content>h1 {
        color: #fff;

        font-weight: 100;
    }
    
    &>.card>.content>p {
        color: #fff;
    }

`;
