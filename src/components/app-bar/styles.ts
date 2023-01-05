import styled from 'styled-components';

import Colors from '@styles/colors';

import BoxContainer from '../box-container';

export const Container = styled(BoxContainer)`
  && {
    height: 60;
    width: 100%;
    display: flex;
    border-radius: 0;
    background-color: ${Colors.darkGrey};
    position: sticky;
    top: 0;
  }
`;

export const LogoImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  height: 100%;
  width: 12%;
  align-self: center;
`;
