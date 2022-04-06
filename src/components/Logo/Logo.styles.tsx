import styled from 'styled-components';
import { LogoProps } from './Logo.types';

export const LogoWrapper = styled.div<LogoProps>`
  margin-bottom: 20px;
  width: ${({ size }) => `${size}px`};
`;