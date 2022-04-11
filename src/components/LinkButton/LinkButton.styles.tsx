import styled, { css } from 'styled-components';
import { StyledLinkButtonProps } from './LinkButton.types';

export const LinkButton = styled.a<StyledLinkButtonProps>`
  align-items: center;
  background: transparent;
  border: 2px solid white;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 1em;
  gap: 5px;
  justify-content: center;
  margin: 10px;
  max-width: 100%;
  padding: 10px;
  transition: all 0.4s;
  user-select: none;
  width: 350px;

  ${({ small }) =>
    small &&
    css`
      font-size: 0.9em;
      margin: 5px;
      padding: 5px;
    `}

  ${({ noBorder }) =>
    noBorder &&
    css`
      border: none;
    `}

  ${({ transformHover }) =>
    transformHover
      ? css`
          &:hover {
            transform: scale(1.05);
          }

          &:active {
            transform: scale(0.99);
          }
        `
      : css`
          &:hover {
            background-color: white;
            color: black;
          }

          &:active {
            transform: scale(0.97);
          }
        `}
`;
