import { HTMLAttributes } from 'react';

import t from '@shared/i18n';
import Text from '@components/text';
import Button from '@components/button';
import { Comment } from '@shared/models/comment.model';
import parseTimeAgo from '@utils/parse-time-ago.util';

import {
  CommentAvatarContainer,
  CommentContent,
  CommentHeader,
  CommentItemContainer,
  ContentContainer,
  ContentFooterContainer,
  ParsedTimeText,
} from './styles';
import VoteButtons from './vote-buttons';

// TODO atomize and remove hard coded votes
function CommentItem({ comment }: { comment: Comment } & HTMLAttributes<HTMLDivElement>) {
  return (
    <CommentItemContainer>
      <CommentAvatarContainer />

      <ContentContainer>
        <CommentContent>
          <CommentHeader>
            <Text bold center variant={'body1'}>
              {comment.createdBy}
            </Text>
            <ParsedTimeText center variant={'body2'}>
              {parseTimeAgo(comment.createdAt)}
            </ParsedTimeText>
          </CommentHeader>
          <Text>{comment.text}</Text>
        </CommentContent>

        <ContentFooterContainer>
          <VoteButtons onDownVote={() => {}} onUpVote={() => {}} />

          <Button variant={'text'}>
            <Text bold variant={'body2'}>
              {t('reply')}
            </Text>
          </Button>
        </ContentFooterContainer>
      </ContentContainer>
    </CommentItemContainer>
  );
}

export default CommentItem;
