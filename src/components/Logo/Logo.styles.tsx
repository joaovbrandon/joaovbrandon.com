import styled from 'styled-components';
import { LogoProps } from './Logo.types';

export const LogoWrapper = styled.div<LogoProps>`
  margin-bottom: 10px;
  user-select: none;
  width: ${({ size }) => `${size}px`};
`;
