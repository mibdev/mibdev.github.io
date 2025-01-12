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

  & > .row {
    width: 100%;

    display: flex;
    flex-direction: row;
  }

  & .left-content > .animated-container {
    margin-bottom: 1rem;

    ${AnimationSlideInFromBottom}
    animation-delay: 0.3s;

    & > h1 {
      transform: rotate(-5deg);

      font-size: 2.25rem;
      font-family: 'Permanent Marker', cursive;
    }
    & > h1 > span {
      color: #000;
      background: #fff;

      padding: 0 1rem;

      font-size: 2.25rem;
      font-family: 'Permanent Marker', cursive;
    }
  }

  & .left-content > img {
    width: 25rem;

    ${AnimationGrayscaleOut}
    animation-delay: 1s;
    animation-duration: 0.5s;
  }

  & .column {
    width: 100%;
    ${FlexColumnCenter}
  }

  & iframe {
    width: 350px;
    height: 350px;
    border: none;
    margin-top: 2rem;
  }
`;
