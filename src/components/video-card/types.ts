import { Movie } from '@models/movie.model';

interface VideoCardProps {
  movie: Movie;
  onClick?: (id: string) => void;
  className?: string;
  elevation?: number;
}

export default VideoCardProps;
