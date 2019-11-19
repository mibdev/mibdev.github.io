import styled from 'styled-components';

import { FlexColumnCenter } from '../../styles/FlexColumnCenter';
import { AnimationGrayscaleOut } from '../../styles/AnimationGrayscaleOut';
import { AnimationSlideInFromBottom } from '../../styles/AnimationSlideInFromBottom';

export const Container = styled.div`

    & {
        width: 100%;

        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;

        ${AnimationSlideInFromBottom}
    }

    &>.row {
        width: 100%;

        display: flex;
        flex-direction: row;
    }

    & .left-content>.animated-container {
        margin-bottom: 1rem;

        ${AnimationSlideInFromBottom}
        animation-delay: 0.3s;

        &>h1 {
            transform: rotate(-5deg);

            font-size: 2.25rem;
            font-family: 'Permanent Marker', cursive;
        }
        &>h1>span {
            color: #000;
            background: #fff;

            padding: 0 1rem;
    
            font-size: 2.25rem;
            font-family: 'Permanent Marker', cursive;
        }
    }
    
    & .left-content>img {
        width: 25rem;

        ${AnimationGrayscaleOut}
        animation-delay: 1s;
        animation-duration: 0.5s;
    }

    & .column {
        width: 100%;
        ${FlexColumnCenter}
    }

    & form {
        width: 50%;
        ${FlexColumnCenter}
    }

    & form>.textbox {
        width: 100%;
        margin-top: 1.25rem;

        ${FlexColumnCenter}
        align-items: flex-start;
    }

    & form>.submit-button {
        width: 100%;
        margin-top: 1.25rem;

        ${FlexColumnCenter}
    }

    & form label {
        text-transform: uppercase;
    }
    
    & form input {
        width: 100%;
        
        padding: 0.45rem;
        margin-top: 0.25rem;

        font-size: 1rem;

        outline: none;

        background: #0C0C0C;
        border: 1px solid #fff;
        box-shadow: -0.3rem 0.35rem 0 #fff;

        transition: all 0.2s;

        &:focus, &:hover {
            box-shadow: 0 0 0 #fff;
        }
    }
    
    & form input:not([value=""]):not(:focus):invalid {
        border-color: #ff4444;

        box-shadow: -0.3rem 0.35rem 0 #ff4444;


        animation: shake_error 0.4s 1 linear;

        &:hover {
            box-shadow: 0 0 0 #ff4444;
        }
    }

    @keyframes shake_error {
        0% { transform: translateX(3rem); }
        20% { transform: translateX(-3rem); }
        40% { transform: translateX(1.5rem); }
        60% { transform: translateX(-1.5rem); }
        80% { transform: translateX(0.75rem); }
        100% { transform: translateX(0); }
    }

    & form .textarea-container {
        position: relative;

        width: 100%;
    }

    & form .textarea-container>textarea {
        min-width: 100%;
        max-width: 100%;
        min-height: 7rem;

        padding: 0.45rem;
        margin-top: 0.1rem;

        font-size: 1rem;
        
        resize: none;
        outline: none;
        
        background: #0C0C0C;
        border: 1px solid #fff;

        box-shadow: -0.3rem 0.35rem 0 #fff;

        transition: all 0.2s;

        &:focus, &:hover {
            box-shadow: 0 0 0 #fff;
        }
    }

    /* Scrollbar */
   & form .textarea-container>textarea::-webkit-scrollbar {
        cursor: pointer;
       width: 0.75rem;
    }

    /* Track */
   & form .textarea-container>textarea::-webkit-scrollbar-track {
        background: #fff; 
    }

    /* Handle */
   & form .textarea-container>textarea::-webkit-scrollbar-thumb {
        background: #333; 
    }

    /* Handle on hover */
   & form .textarea-container>textarea::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }

    & form .textarea-container>.char-counter {
        position: absolute;

        right: -0.2rem;
        bottom: 0.5rem;

        font-size: 0.75rem;

        cursor: default;
        user-select: none;
    }

    & form button {
        padding: 0.45rem 1rem;

        font-size: 1rem;

        outline: none;
        border: 1px solid #fff;

        transition: all 0.2s;

        &:hover {
            box-shadow: 0 0 0 #fff;
        }
    }

    & form .normal-button {
        cursor: pointer;

        background: #0C0C0C;
        box-shadow: -0.3rem 0.35rem 0 #fff;
    }

    & form .locked-button {
        cursor: not-allowed;

        color: #000;
        background: #fff;

        box-shadow: -0.25rem 0.3rem 0 #0C0C0C, -0.3rem 0.35rem 0 #fff;

    }

`;
