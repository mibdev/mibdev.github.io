import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';

export const Container = styled.div`
    & {
        animation: ${props => props.duration || 0.75}s ${props => keyframes`${props.animation || fadeInUp}`};
    }
`;
