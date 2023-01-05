import HttpRequest from '@infra/http-request';
import { useEffect, useState } from 'react';

import { normalizeMovie } from '@models/movie.model';
import { Model } from '@models';
import ApiRoutes from '@constants/api-routes';

const useFindAllMovies = () => {
  const [data, setData] = useState<Model[]>([]);

  const fetchData = async () => {
    const apiPath = ApiRoutes.MOVIE;
    const fetchedData = await HttpRequest.findAll({ apiPath });

    const normalizedData = fetchedData.map((item) => normalizeMovie(item));

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

export default useFindAllMovies;
