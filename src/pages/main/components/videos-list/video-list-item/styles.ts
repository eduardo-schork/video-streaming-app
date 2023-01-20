import styled from 'styled-components';
import Spacings from '@styles/spacings';

export const VideoCardContainer = styled.div`
  && {
    display: flex;
    margin: ${Spacings.medium};
  }
`;

export const MoviesListContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-y: auto;
  // ::-webkit-scrollbar {
  //   display: none;
  // }
`;
