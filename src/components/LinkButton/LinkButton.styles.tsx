import styled from 'styled-components';

export const LinkButton = styled.a`
  align-items: center;
  border: 2px solid white;
  color: white;
  cursor: pointer;
  display: flex;
  gap: 5px;
  justify-content: center;
  margin: 10px;
  max-width: 100%;
  padding: 10px;
  transition: all 0.4s;
  width: 350px;

  &:hover {
    background-color: white;
    color: black;
  }
`;
