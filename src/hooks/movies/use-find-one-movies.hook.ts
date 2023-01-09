import HttpRequest from '@infra/http-request';
import { useCallback, useEffect, useState } from 'react';

import { Movie, MovieApi, normalizeMovie } from '@models/movie.model';
import ApiRoutes from '@constants/api-routes';

const useFindOneMovie = ({ movieId }: { movieId?: string }) => {
  const [data, setData] = useState<Movie>();

  const fetchData = useCallback(async () => {
    try {
      if (!movieId) return;

      const apiPath = ApiRoutes.MOVIE;
      const fetchedData = (await HttpRequest.findOne({ apiPath, id: movieId })) as MovieApi;

      const normalizedData = normalizeMovie(fetchedData);

      setData(normalizedData);
    } catch (error) {
      console.log({ error });
    }
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
