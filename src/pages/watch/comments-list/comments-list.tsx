import { Comment } from '@shared/models/comment.model';
import { HTMLAttributes } from 'react';
import CommentsContainer from './comments-container';
import { CommentsListContainer } from './styles';

function CommentsList({ comments }: { comments?: Comment[] } & HTMLAttributes<HTMLDivElement>) {
  if (comments == null) return null;

  return (
    <CommentsListContainer>
      {comments.map((comment) => (
        <CommentsContainer key={comment.id} style={{ margin: '1%' }} comment={comment} />
      ))}
    </CommentsListContainer>
  );
}

export default CommentsList;
