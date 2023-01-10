import HttpRequest from '@infra/http-request';
import { useCallback, useEffect, useState } from 'react';

import ApiRoutes from '@constants/api-routes';

import { Comment, CommentApi, normalizeComment } from '@models/comment.model';

const useFindAllCommentsByMovie = ({ movieId }: { movieId?: string }) => {
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
  }, []);

  return {
    data,
    fetchData,
  };
};

export default useFindAllCommentsByMovie;
