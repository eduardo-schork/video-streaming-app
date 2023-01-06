import HttpRequest from '@infra/http-request';
import { useCallback, useEffect, useState } from 'react';

import { MovieModelApi, normalizeMovie } from '@models/movie.model';
import { Model } from '@models';
import ApiRoutes from '@constants/api-routes';

const useFindOneMovie = ({ movieId }: { movieId?: string }) => {
  const [data, setData] = useState<Model>();

  const fetchData = useCallback(async () => {
    if (!movieId) return;

    const apiPath = ApiRoutes.MOVIE;
    const fetchedData = (await HttpRequest.findOne({ apiPath, id: movieId })) as MovieModelApi;

    const normalizedData = normalizeMovie(fetchedData);

    setData(normalizedData);
  }, [movieId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    fetchData,
  };
};

export default useFindOneMovie;
