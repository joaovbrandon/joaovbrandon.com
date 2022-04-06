import styled from 'styled-components';

export const LanguageSwitcherWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  position: absolute;
  right: 10px;
  top: 10px;
  transition: all 0.4s;
  z-index: 2;

  svg {
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.99);
    }
  }
`;

export const LanguageSwitcher = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;

  span {
    border: 1px solid white;
    cursor: pointer;
    font-size: 1.1em;
    font-weight: bold;
    padding: 5px 10px;
    transition: all 0.4s;
    width: 100%;

    &:hover {
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.99);
    }
  }
`;

export const LanguageSwitcherOverlay = styled.div`
  background: black;
  bottom: 0;
  left: 0;
  opacity: 0.7;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;
`;
