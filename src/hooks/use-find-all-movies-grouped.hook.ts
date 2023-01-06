import HttpRequest from '@infra/http-request';
import { useEffect, useState } from 'react';

import ApiRoutes from '@constants/api-routes';

import { MovieGrouped, MoviesGroupedModelApi, normalizeMovieGrouped } from '@models/movies-grouped';

const useFindAllMoviesGrouped = () => {
  const [data, setData] = useState<MovieGrouped[]>([]);

  const fetchData = async () => {
    const apiPath = ApiRoutes.MOVIES_GROUPED;
    const fetchedData = (await HttpRequest.findAll({ apiPath })) as MoviesGroupedModelApi[];

    const normalizedData = fetchedData.map((item) => normalizeMovieGrouped(item));

    setData(normalizedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    fetchData,
  };
};

export default useFindAllMoviesGrouped;
