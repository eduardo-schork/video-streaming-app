import { MovieGrouped } from '@src/models/movies-grouped';

export type VideoListItemProps = {
  movieGrouped: MovieGrouped;
  handleOnClickMovie: (id: string) => void;
};
