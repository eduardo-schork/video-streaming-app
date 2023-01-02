import Colors from '@styles/colors';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  background-color: ${Colors.darkGrey};
`;

export const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;
