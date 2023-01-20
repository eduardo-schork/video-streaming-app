import HttpRequest from '@infra/http-request';
import { useEffect, useState } from 'react';

import { Movie, MovieApi, normalizeMovie } from '@shared/models/movie.model';

import ApiRoutes from '@shared/constants/api-routes';

const useFindAllMovies = () => {
  const [data, setData] = useState<Movie[]>([]);

  const fetchData = async () => {
    const apiPath = ApiRoutes.MOVIE;
    const fetchedData = (await HttpRequest.findAll({ apiPath })) as MovieApi[];

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
