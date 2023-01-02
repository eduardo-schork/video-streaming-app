import HttpRequest from '@infra/http-request';
import { useEffect, useState } from 'react';

import ApiPath from '@constants/api-path.const';
import { normalizeMovie } from '@models/movie.model';
import { Model } from '@models';

const useFindAllMovies = () => {
  const [data, setData] = useState<Model[]>([]);

  const fetchData = async () => {
    const apiPath = ApiPath.movie;
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
