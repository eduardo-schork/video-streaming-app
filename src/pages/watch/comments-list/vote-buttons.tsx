import { HtmlHTMLAttributes } from 'react';
import Text from '@components/text';

import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  BsHandThumbsDownFill as DownVoteIconFill,
  BsHandThumbsDown as DownVoteIcon,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  BsHandThumbsUpFill as UpVoteIconFill,
  BsHandThumbsUp as UpVoteIcon,
} from 'react-icons/bs';

import Colors from '@styles/colors';
import IconButton from '@components/icon-button/icon-button';
import { VoteButtonsContainer, VoteItem } from './styles';

const VotesMock = {
  upVotes: 16,
  downVotes: 15,
  upVoted: false,
  downVoted: false,
};

type VoteObject = typeof VotesMock;

function UpVote({ onClick, ...props }: HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <VoteItem onClick={onClick} {...props}>
      <IconButton>
        <DownVoteIcon color={Colors.white} />
      </IconButton>
      <Text center variant={'body2'}>
        {VotesMock.upVotes}
      </Text>
    </VoteItem>
  );
}

function DownVote({ onClick, ...props }: HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <VoteItem onClick={onClick} {...props}>
      <IconButton>
        <UpVoteIcon color={Colors.white} />
      </IconButton>

      <Text center variant={'body2'}>
        {VotesMock.downVotes}
      </Text>
    </VoteItem>
  );
}

function VoteButtons({
  onUpVote,
  onDownVote,
  ...props
}: { onUpVote: () => void; onDownVote: () => void } & HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <VoteButtonsContainer {...props}>
      <UpVote onClick={onUpVote} />
      <DownVote onClick={onDownVote} />
    </VoteButtonsContainer>
  );
}

export default VoteButtons;
