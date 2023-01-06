import styled from 'styled-components';
import Spacings from '@styles/spacings';
import Text from '@components/text';
import Colors from '@styles/colors';

export const CategoryListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CategoryTitle = styled(Text)`
  && {
    font-weight: bold;
    color: ${Colors.white};
  }
`;
