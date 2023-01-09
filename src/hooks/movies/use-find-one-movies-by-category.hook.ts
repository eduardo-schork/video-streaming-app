import HttpRequest from '@infra/http-request';
import { useCallback, useEffect, useState } from 'react';

import ApiRoutes from '@constants/api-routes';
import { MoviesByCategory, MoviesByCategoryApi, normalizeMoviesByCategory } from '@models/movies-grouped';

const useFindOneMoviesByCategory = (categoryId?: string) => {
  const [data, setData] = useState<MoviesByCategory>();

  const fetchData = async () => {
    if (!categoryId) return;

    const apiPath = ApiRoutes.MOVIES_BY_CATEGORY;
    const fetchedData = (await HttpRequest.findOne({
      apiPath,
      id: categoryId,
    })) as MoviesByCategoryApi;

    const normalizedData = normalizeMoviesByCategory(fetchedData);

    setData(normalizedData);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData, categoryId]);

  return {
    data,
    fetchData,
  };
};

export default useFindOneMoviesByCategory;
