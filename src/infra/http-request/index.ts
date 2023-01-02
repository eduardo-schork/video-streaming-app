import { ApiModel } from '@src/models';

// eslint-disable-next-line import/no-cycle
import AxiosAdapter from './axios';

export interface HttpRequestPort {
  findAll({ apiPath }: { apiPath: string }): Promise<ApiModel[]>;
  findOne({ id, apiPath }: { id: string; apiPath: string }): Promise<ApiModel>;
  // TODO implement create and stream
}

const HttpRequest = AxiosAdapter;

export default HttpRequest;
