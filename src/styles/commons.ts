import styled from 'styled-components';
import { screen } from '@styles';

export const CenterPageWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 10px;
  position: relative;
  text-align: center;

  @media ${screen.min.md} {
    min-height: 100vh;
  }
`;
