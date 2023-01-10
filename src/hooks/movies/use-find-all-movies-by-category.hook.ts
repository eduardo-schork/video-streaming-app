import HttpRequest from '@infra/http-request';
import { useEffect, useState } from 'react';

import ApiRoutes from '@constants/api-routes';

import { MoviesByCategory, MoviesByCategoryApi, normalizeMoviesByCategory } from '@models/movies-grouped';

const useFindAllMoviesByCategory = () => {
  const [data, setData] = useState<MoviesByCategory[]>([]);

  const fetchData = async () => {
    const apiPath = ApiRoutes.MOVIES_BY_CATEGORY;
    const fetchedData = (await HttpRequest.findAll({ apiPath })) as MoviesByCategoryApi[];

    const normalizedData = fetchedData.map((item) => normalizeMoviesByCategory(item));

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

export default useFindAllMoviesByCategory;
