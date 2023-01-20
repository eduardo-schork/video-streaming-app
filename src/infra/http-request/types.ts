import { ApiModel } from '@shared/models';

export interface HttpRequestPort {
  findAll({ id, apiPath }: { id?: string; apiPath: string }): Promise<ApiModel[]>;
  findOne({ id, apiPath }: { id: string; apiPath: string }): Promise<ApiModel>;
  // TODO implement create and stream
}
