import VideoPlaceholderImage from '@assets/video-placeholder.jpg';

import VideoCardProps from './types';
import { Container, InfoContainer, MovieImage, MovieSubtitle, MovieTitle } from './styles';

function VideoCard({ movie, onClick }: VideoCardProps): JSX.Element {
  return (
    <Container elevation={2} onClick={() => onClick(movie.id)}>
      <MovieImage alt={'placeholder'} src={VideoPlaceholderImage} />

      <InfoContainer>
        <MovieTitle variant={'body1'}>{movie.title}</MovieTitle>
        <MovieSubtitle variant={'subtitle2'}>{movie.createdBy}</MovieSubtitle>
      </InfoContainer>
    </Container>
  );
}

export default VideoCard;
