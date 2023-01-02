import axios from 'axios';
// TODO fix this
// eslint-disable-next-line import/no-cycle
import { HttpRequestPort } from '..';

const apiUrl = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: apiUrl,
  // timeout: 1000,
});

async function findAll({ apiPath }: { apiPath: string }) {
  try {
    const url = apiPath;

    const { data } = await axiosInstance.get(url);

    return data;
  } catch (error) {
    console.log({ error });
  }
  return [];
}

async function findOne({ id, apiPath }: { id: string; apiPath: string }) {
  try {
    const url = `${apiPath}/${id}`;

    const { data } = await axiosInstance.get(url);

    return data;
  } catch (error) {
    console.log({ error });
  }
  return [];
}

const AxiosAdapter: HttpRequestPort = {
  findAll,
  findOne,
};

export default AxiosAdapter;
