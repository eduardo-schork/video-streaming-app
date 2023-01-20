import { Comment, normalizeComment } from '@shared/models/comment.model';
import { HTMLAttributes, memo } from 'react';
import { CommentBox } from './styles';
import CommentItem from './comment-item';

function CommentsContainer({ comment, ...props }: { comment: Comment } & HTMLAttributes<HTMLDivElement>) {
  return (
    <CommentBox {...props}>
      <CommentItem comment={comment} />

      {comment?.subComments?.map((subComment) => {
        const normalizedComment = normalizeComment(subComment);
        return <CommentsContainer key={normalizedComment.id} comment={normalizedComment} />;
      })}
    </CommentBox>
  );
}

export default memo(CommentsContainer);
