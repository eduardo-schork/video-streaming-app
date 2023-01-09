import styled from 'styled-components';
import Text from '@components/text';
import Colors from '@styles/colors';

export const CategoryListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CategoryTitle = styled(Text)`
  && {
    padding: 1%;
    font-weight: bold;
    color: ${Colors.white};
  }
`;
