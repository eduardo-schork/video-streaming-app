import { MoviesByCategory } from '@models/movies-grouped';

export type VideosListProps = {
  moviesGrouped: MoviesByCategory[];
  handleOnClickMovie: (id: string) => void;
};
