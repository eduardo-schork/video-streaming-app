import { MovieGrouped } from '@src/models/movies-grouped';

export type VideosListProps = {
  moviesGrouped: MovieGrouped[];
  handleOnClickMovie: (id: string) => void;
};
