import styled from 'styled-components';

export const Container = styled.div`

    position: relative;

    width: 100%;
    min-height: 100vh;

    z-index: 0;

    &>.logo-mask {
        position: fixed;
        overflow: hidden;
        
        height: 100%;
        left: -45%;

        z-index: -1;
    }

    &>.logo-mask>.mib-logo {
        width: auto;
        height: 180vh;
        transform: translateY(-15%);
    }

    &>.content {
        width: 45%;
        margin: 0 5% 0 auto;

        display: flex;
        flex-direction: column;
    }

    .header {
        transition: all 0.5s ease-in-out;
        margin-top: ${props => props.headerMarginTop}px;

        display: flex;
        flex-direction: column;
    }

    .title {
        display: flex;
        flex-direction: column;

        align-items: flex-end;
        opacity: 80%;
    }

    .title>h2 {
        font-weight: 200;
        font-family: 'Oswald', sans-serif;
        
        letter-spacing: 0px;
        font-size: 1.5vw;
        text-transform: uppercase;
    }

    .title>h1 {
        font-weight: 900;
        font-family: 'Fira Code', monospace;

        letter-spacing: 8px;
        font-size: 2.25vw;
        white-space: nowrap;
        word-wrap: none;
    }

    .separator {
        margin-top: 32px;
        width: 100%;
        border-color: #555;
    }

    .nav-list {
        position: relative;

        width: 100%;
        margin-top: 32px;

        list-style: none;

        display: flex;
        flex-direction: row;

        align-items: center;
        justify-content: space-evenly;
    }
    
    .nav-item>.nav-link {
        font-size: 14px;
        width: 25%;
        padding: 0.75rem 0.50rem;
        opacity: 80%;
        
        font-weight: 200;
        font-family: 'Oswald', sans-serif;
        letter-spacing: 0.2rem;

        text-decoration: none;
        text-transform: uppercase;
        
        &:hover {
            border-bottom: 2px solid #fff;
            opacity: 1;
            transition: all .3s ease-out;
        }
    }
`;
