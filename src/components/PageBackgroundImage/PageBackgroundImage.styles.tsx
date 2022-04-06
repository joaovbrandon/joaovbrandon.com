import styled from 'styled-components';
import { PageBackgroundImageProps } from './PageBackgroundImage.types';

export const BackgroundImage = styled.div<PageBackgroundImageProps>`
  background: url(${({ image }) => image}) no-repeat center center;
  background-size: cover;
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

export const BackgroundOverlay = styled.div<PageBackgroundImageProps>`
  background: black;
  bottom: 0;
  left: 0;
  opacity: ${({ overlayOpacity = '0.3' }) => overlayOpacity};
  position: fixed;
  right: 0;
  top: 0;
`;
