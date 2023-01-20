import HttpRequest from '@infra/http-request';
import { useCallback, useEffect, useState } from 'react';

import ApiRoutes from '@shared/constants/api-routes';
import { MoviesByCategory, MoviesByCategoryApi, normalizeMoviesByCategory } from '@shared/models/movies-grouped';

const useFindOneMoviesByCategory = ({ categoryId }: { categoryId?: string }) => {
  const [data, setData] = useState<MoviesByCategory>();

  const fetchData = useCallback(async () => {
    try {
      if (!categoryId) return;

      const apiPath = ApiRoutes.MOVIES_BY_CATEGORY;
      const fetchedData = (await HttpRequest.findOne({ apiPath, id: categoryId })) as MoviesByCategoryApi;

      const normalizedData = normalizeMoviesByCategory(fetchedData);

      setData(normalizedData);
    } catch (error) {
      console.log({ error });
    }
  }, [categoryId]);

  useEffect(() => {
    fetchData();
  }, [fetchData, categoryId]);

  return {
    data,
    fetchData,
  };
};

export default useFindOneMoviesByCategory;
