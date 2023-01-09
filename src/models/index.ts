import { Movie, MovieApi } from './movie.model';
import { MoviesByCategory, MoviesByCategoryApi } from './movies-grouped';

export type ApiModel = MovieApi | MoviesByCategoryApi;

export type Model = Movie | MoviesByCategory;
