import axios from 'axios';
import { HttpRequestPort } from '../types';

const apiUrl = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: apiUrl,
  // timeout: 1000,
});

async function findAll({ apiPath, id }: { id?: string; apiPath: string }) {
  try {
    const url = apiPath + (id ? `/${id}` : '');

    console.log({ url });

    const { data } = await axiosInstance.get(url);

    console.log({ data });

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
