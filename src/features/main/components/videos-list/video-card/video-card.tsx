import VideoCardProps from './types';
import { Container, InfoContainer, MovieImage, MovieImageContainer, MovieSubtitle, MovieTitle } from './styles';
import useController from './controller.hook';
import { memo } from 'react';

function VideoCard({ movie, onClick }: VideoCardProps): JSX.Element {
  const { snapshotPath, handleOnMouseOver, handleOnMouseOut } = useController(movie);

  return (
    <Container elevation={2} onClick={() => onClick(movie.id)}>
      <MovieImageContainer>
        {snapshotPath && (
          <MovieImage
            onMouseOver={handleOnMouseOver}
            onMouseOut={handleOnMouseOut}
            alt={'placeholder'}
            src={snapshotPath}
          />
        )}
      </MovieImageContainer>

      <InfoContainer>
        <MovieTitle variant={'body1'}>{movie.title}</MovieTitle>
        <MovieSubtitle variant={'subtitle2'}>{movie.createdBy}</MovieSubtitle>
      </InfoContainer>
    </Container>
  );
}

export default memo(VideoCard);
