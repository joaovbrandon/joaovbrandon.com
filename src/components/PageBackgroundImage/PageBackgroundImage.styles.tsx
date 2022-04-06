import styled from 'styled-components';
import { PageBackgroundImageProps } from './PageBackgroundImage.types';

export const BackgroundImage = styled.div<PageBackgroundImageProps>`
  background: url(${({ image }) => image}) no-repeat center center fixed;
  background-size: cover;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const BackgroundOverlay = styled.div`
  background: black;
  bottom: 0;
  left: 0;
  opacity: 0.3;
  position: absolute;
  right: 0;
  top: 0;
`;
