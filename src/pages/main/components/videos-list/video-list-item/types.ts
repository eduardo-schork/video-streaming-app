import { MoviesByCategory } from '@shared/models/movies-grouped';

export type VideoListItemProps = {
  movieGrouped: MoviesByCategory;
  handleOnClickMovie: (id: string) => void;
};
