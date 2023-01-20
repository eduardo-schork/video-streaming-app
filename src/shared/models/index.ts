import { Category, CategoryApi } from './category.model';
import { Comment, CommentApi } from './comment.model';
import { Movie, MovieApi } from './movie.model';
import { MoviesByCategory, MoviesByCategoryApi } from './movies-grouped';

export type ApiModel = MovieApi | MoviesByCategoryApi | CategoryApi | CommentApi;

export type Model = Movie | MoviesByCategory | Category | Comment;
