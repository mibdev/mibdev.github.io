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
        color: rgba(0, 0, 0, 0.75);
        
        font-size: 2.5rem;
        letter-spacing: 4px;

        text-decoration: none;
        text-transform: uppercase;
        
        transition: color 0.25s;

        &:hover {
            color: rgba(0, 0, 0, 0.6);
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
        color: rgba(0, 0, 0, 0.25);

        margin-left: 20px;
        font-size: 0.9rem;
        
        cursor: pointer;
        white-space: nowrap;

        line-height: 2.5;
        text-decoration: none;
        text-transform: uppercase;

        transition: color 0.25s;
        
        &:hover {
            color: rgba(0, 0, 0, 0.75);
        }
    }
    
    &>.nav-items>.active-nav-link {
        color: rgba(0, 0, 0, 0.75);
    }
}

`;
