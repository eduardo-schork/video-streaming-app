enum ApiRoutes {
  MOVIE = '/movie',
  STREAM = '/stream',
  COMMENT = '/comment',
  CATEGORY = '/category',
  MOVIES_BY_CATEGORY = `${ApiRoutes.MOVIE}/category`,
  COMMENTS_BY_MOVIE = `${ApiRoutes.COMMENT}${ApiRoutes.MOVIE}`,
}

export default ApiRoutes;
