export type CategoryModelApi = {
  _id: string;
  createdAt: number;
  createdBy: string;
  updatedAt?: number;
  updatedBy?: string;
  deletedAt?: number;
  deletedBy?: string;
  title: string;
};

export function normalizeCategory(input: CategoryModelApi) {
  return {
    // eslint-disable-next-line no-underscore-dangle
    id: input?._id,
    createdAt: input?.createdAt,
    createdBy: input?.createdBy,
    deletedAt: input?.deletedAt,
    title: input?.title,
  };
}

export type Category = ReturnType<typeof normalizeCategory>;
