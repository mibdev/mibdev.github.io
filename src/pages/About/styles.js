import styled from 'styled-components';

export const Container = styled.div`

    position: relative;

    width: 100%;
    min-height: 100vh;

    z-index: 0;

    &>.content {
        width: 90%;
        margin: 0 auto;

        display: flex;
        flex-direction: row;

        justify-content: space-between;
    }

    &>.content>.left-content {
        width: 40%;
        margin-top: 100px;
    }

    &>.content>.right-content {
        width: 40%;
        margin-top: 100px;

        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: space-evenly;
    }
    
    &>.content>.left-content>h2 {
        font-weight: 200;
        font-family: 'Oswald', sans-serif;

        opacity: 80%;        
        letter-spacing: 0px;
        font-size: 2vw;
        text-transform: uppercase;
    }

    &>.content>.left-content>h1 {
        font-weight: 900;
        font-family: 'Fira Code', monospace;

        opacity: 80%;
        letter-spacing: 1px;
        font-size: 2.25vw;
        white-space: nowrap;
        word-wrap: none;
    }

    &>.content>.left-content>hr {
        margin: 16px 0;
        border-color: #555;
    }

    &>.content>.left-content>.skills-list {
        width: 100%;
        
        display: flex;
        flex-direction: row;

        align-items: center;
        justify-content: space-evenly;
    }

    &>.content>.left-content>.skills-list>span {
        font-weight: 200;
        font-family: 'Oswald', sans-serif;
        
        opacity: 80%;
        text-transform: uppercase;
    }

    &>.content>.left-content>h5 {
        margin-top: 100px;
        
        font-weight: 100;
        font-family: 'Muli', sans-serif;

        font-style: italic;
        
        font-size: 1.5vw;
        letter-spacing: 1px;
        opacity: 80%;
        
        padding: 50px;
    }

    &>.content>.right-content>.mirrored-img {
        width: 25vw;
        height: 25vw;
        
        border: 1px solid #fff;
        transform: translate(25px, 25px);
        
        transition: all 0.2s ease-in-out;
    }

    &>.content>.right-content>.mirrored-img:hover {
        transform: translate(0, 0);
    }

    &>.content>.right-content>.mirrored-img>.avatar {
        width: 25vw;
        height: auto;
        
        filter: grayscale(100%);
        transform: translate(25px, -25px);

        transition: all 0.2s ease-in-out;
    }

    &>.content>.right-content>.mirrored-img>.avatar:hover {
        filter: grayscale(0%);
        transform: translate(0, 0);
    }

`;
