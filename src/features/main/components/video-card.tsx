import VideoPlaceholderImage from '@assets/video-placeholder.jpg';

import VideoCardProps from './types';
import { Container, MovieImage, MovieSubtitle, MovieTitle } from './styles';

// TODO fix hard coded values
function VideoCard({ movie, onClick }: VideoCardProps): JSX.Element {
  return (
    <Container onClick={() => onClick(movie.id)}>
      <MovieImage width={220} height={120} alt={'placeholder'} src={VideoPlaceholderImage} />

      <MovieTitle variant={'h6'}>{movie.title}</MovieTitle>
      <MovieSubtitle>{movie.createdBy}</MovieSubtitle>
    </Container>
  );
}

export default VideoCard;
