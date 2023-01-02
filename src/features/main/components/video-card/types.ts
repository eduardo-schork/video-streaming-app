import { Movie } from '@models/movie.model';

interface VideoCardProps {
  movie: Movie;
  onClick: (id: string) => void;
}

export default VideoCardProps;
