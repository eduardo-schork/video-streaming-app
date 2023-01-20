import HttpRequest from '@infra/http-request';
import { useCallback, useEffect, useState } from 'react';

import ApiRoutes from '@shared/constants/api-routes';

import { Comment, CommentApi, normalizeComment } from '@shared/models/comment.model';

const useFindAllCommentsByMovie = (movieId?: string) => {
  const [data, setData] = useState<Comment[]>([]);

  const fetchData = useCallback(async () => {
    const apiPath = ApiRoutes.COMMENTS_BY_MOVIE;
    const fetchedData = (await HttpRequest.findAll({ apiPath, id: movieId })) as CommentApi[];

    if (!fetchedData) {
      return [];
    }

    const normalizedData = fetchedData.map((item) => normalizeComment(item));

    setData(normalizedData);
  }, [movieId]);

  useEffect(() => {
    fetchData();
  }, [movieId]);

  return {
    data,
    fetchData,
  };
};

export default useFindAllCommentsByMovie;
