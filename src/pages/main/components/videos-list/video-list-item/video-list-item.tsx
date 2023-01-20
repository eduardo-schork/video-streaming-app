import VideoCard from '@components/video-card/video-card';
import { MoviesListContainer, VideoCardContainer } from './styles';
import { VideoListItemProps } from './types';

function VideoListItem({ handleOnClickMovie, movieGrouped }: VideoListItemProps) {
  return (
    <MoviesListContainer>
      {movieGrouped.movies.map((movie) => (
        <VideoCardContainer key={movie.id}>
          <VideoCard onClick={handleOnClickMovie} key={movie.id} movie={movie} />
        </VideoCardContainer>
      ))}
    </MoviesListContainer>
  );
}
export default VideoListItem;
