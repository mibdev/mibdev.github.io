import styled from 'styled-components';

export const Container = styled.div`

    & {
        position: relative;
        overflow: hidden;

        height: 225px;
        max-width: 250px;
        flex: 1;
        flex-shrink: 1;
        flex-basis: 250px;

        margin: 16px;
        
        z-index: 1;

        &:hover {
            &>img {
                transform: scale(1.1);
                filter: grayscale(0%) brightness(0.3) blur(5px);
            }
            &>.content>.top {
                opacity: 0;
                top: -75%;
            }
            &>.content>.bottom {
                top: -5%;
                opacity: 1;
            }
        }
    }

    &>img {
        position: absolute;
        
        width: 100%;
        height: 100%;

        object-fit: cover;
        
        filter: grayscale(100%) brightness(0.5);
        transition: all 0.3s ease-in-out;

        z-index: -1;
    }

    &>.content {
        width: calc(100% - 32px);
        height: calc(100% - 32px);

        padding: 16px;

        display: flex;
        flex-direction: column;

        align-items: center;
    }

    &>.content>.top {
        position: absolute;

        top: 0;
        opacity: 1;
        height: 100%;

        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: flex-end;

        transition: all 0.3s ease-in-out;
    }

    &>.content>.bottom {
        position: absolute;

        top: 45%;
        opacity: 0;
        height: 100%;

        padding: 16px;

        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;

        transition: all 0.3s ease-in-out;
    }
    
    &>.content>.top>h1 {
        color: #fff;
        font-size: 1.5rem;
        font-weight: 100;
        margin-bottom: 16px;
    }
    
    &>.content>.bottom>p {
        color: #fff;
        text-align: center;
    }

`;
