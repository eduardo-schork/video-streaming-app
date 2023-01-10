import styled from 'styled-components';

import Text from '@components/text';
import BoxContainer from '@components/box-container';

import Colors from '@styles/colors';
import Spacings from '@styles/spacings';

export const Container = styled(BoxContainer)`
  && {
    display: flex;
    min-width: 16vw;
    max-width: 16vw;
    flex-direction: column;
    background-color: ${Colors.whiteGrey};
  }
`;
// TODO /\ recieve variant by props and render conditional styles
// EX:
// ${(props) => props} {
//   &:hover {
//     background-color: red;
//   }

//   &:active {
//     background-color: blue;
//   }
// }

export const InfoContainer = styled.div`
  padding: 2%;
`;

export const MovieImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: ${Spacings.medium};
`;

export const MovieImageContainer = styled.div`
  display: flex;
  height: 9vw;
`;

export const MovieTitle = styled(Text)`
  && {
    font-weight: bold;
    padding: ${Spacings.small};
    color: ${Colors.white};
  }
`;

export const MovieSubtitle = styled(Text)`
  && {
    padding: ${Spacings.small};
    color: ${Colors.white};
  }
`;
