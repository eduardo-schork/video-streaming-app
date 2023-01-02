import styled from 'styled-components';

import Text from '@components/text';
import BoxContainer from '@components/box-container';

import Colors from '@styles/colors';
import Spacings from '@styles/spacings';

export const Container = styled(BoxContainer)`
  && {
    display: flex;
    width: 16vw;
    height: 14vw;
    flex-direction: column;
    background-color: ${Colors.whiteGrey};
  }
`;

export const InfoContainer = styled.div`
  padding: 2%;
`;

export const MovieImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  height: 9vw;
  border-radius: ${Spacings.medium};
`;

export const MovieTitle = styled(Text)`
  && {
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
