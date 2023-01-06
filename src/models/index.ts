import { Movie, MovieModelApi } from './movie.model';
import { MoviesGroupedModelApi } from './movies-grouped';

export type ApiModel = MovieModelApi | MoviesGroupedModelApi;

export type Model = Movie;
