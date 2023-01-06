import HttpRequest from '@infra/http-request';
import { useEffect, useState } from 'react';

import { Movie, MovieModelApi, normalizeMovie } from '@models/movie.model';

import ApiRoutes from '@constants/api-routes';

const useFindAllMovies = () => {
  const [data, setData] = useState<Movie[]>([]);

  const fetchData = async () => {
    const apiPath = ApiRoutes.MOVIE;
    const fetchedData = (await HttpRequest.findAll({ apiPath })) as MovieModelApi[];

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
