import styled from 'styled-components';

export const Container = styled.header`

    & {
        margin-bottom: 60px; 

        display: flex;
        flex-direction: row;

        align-content: center;
        justify-content: center;
    }

    &>h1 {
        flex: 1;
        font-size: 1.5rem;
    }

    &>h1>a {
        font-size: 2.5rem;
        letter-spacing: 4px;

        text-decoration: none;
        text-transform: uppercase;
        
        color: rgba(255, 255, 255, 0.75);
        text-shadow: 0 0 0rem rgba(255, 255, 255, 1);

        transition: all 0.25s ease-in-out;

        &:hover {
            color: rgba(255, 255, 255, 1);
            text-shadow: 0 0 2.5rem rgba(255, 255, 255, 1), 0 0 1rem rgba(255, 255, 255, 1);
        }
    }

    &>.nav-items {
        display: flex;
        flex-direction: row;

        align-items: center;
        align-content: center;
        justify-content: center;
    }

    &>.nav-items>.nav-link {
        color: rgba(255, 255, 255, 0.25);

        margin-left: 20px;
        font-size: 0.9rem;
        
        cursor: pointer;
        white-space: nowrap;

        line-height: 2.5;
        text-decoration: none;
        text-transform: uppercase;

        transition: color 0.25s;
        
        &:hover {
            color: rgba(255, 255, 255, 0.75);
        }
    }
    
    &>.nav-items>.active-nav-link {
        color: rgba(255, 255, 255, 0.75);
    }


`;
