import Text from '@components/text';

import Colors from '@styles/colors';
import Spacings from '@styles/spacings';

import styled from 'styled-components';

export const CommentItemContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

// TODO fix hard code
export const CommentAvatarContainer = styled.div`
  width: 6vh;
  height: 6vh;
  border-radius: 6vh;
  background: ${Colors.primary};
`;

export const CommentContent = styled.div`
  margin-left: ${Spacings.medium};
  width: 100;
`;

export const CommentHeader = styled.div`
  flexdirection: row;
  display: flex;
  width: 100%;
`;

export const ParsedTimeText = styled(Text)`
  && {
    margin-left: ${Spacings.medium};
  }
`;

export const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1% 0% 1% 6vh;
`;

export const CommentsListContainer = styled.div`
  display: flex;
  border-radius: ${Spacings.medium};
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContentFooterContainer = styled.div`
  gap: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const VoteButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  align-self: flex-end;
`;

export const VoteItem = styled.div`
  flex-direction: row;
  display: flex;
  gap: 5px;
`;
