import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;

  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 4% 0;
`;
