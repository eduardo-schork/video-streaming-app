export type MovieModelApi = {
  _id: string;
  createdAt: number;
  createdBy: string;
  updatedAt?: number;
  updatedBy?: string;
  deletedAt?: number;
  deletedBy?: string;
  url: string;
  title: string;
  description?: string;
};

export function normalizeMovie(input: MovieModelApi) {
  return {
    // eslint-disable-next-line no-underscore-dangle
    id: input?._id,
    createdAt: input?.createdAt,
    createdBy: input?.createdBy,
    deletedAt: input?.deletedAt,
    url: input?.url,
    title: input?.title,
    description: input?.description,
    path: '/movie',
  };
}

export type Movie = ReturnType<typeof normalizeMovie>;
