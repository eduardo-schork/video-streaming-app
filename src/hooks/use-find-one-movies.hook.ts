import HttpRequest from '@infra/http-request';
import { useCallback, useEffect, useState } from 'react';

import ApiPath from '@constants/api-path.const';
import { normalizeMovie } from '@models/movie.model';
import { Model } from '@models';

const useFindOneMovie = ({ movieId }: { movieId?: string }) => {
  const [data, setData] = useState<Model>();

  const fetchData = useCallback(async () => {
    if (!movieId) return;

    const apiPath = ApiPath.movie;
    const fetchedData = await HttpRequest.findOne({ apiPath, id: movieId });

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
