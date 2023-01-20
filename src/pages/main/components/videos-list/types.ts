import { MoviesByCategory } from '@shared/models/movies-grouped';

export type VideosListProps = {
  moviesGrouped: MoviesByCategory[];
  handleOnClickMovie: (id: string) => void;
};
