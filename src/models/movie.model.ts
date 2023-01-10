import { CategoryApi, normalizeCategory } from './category.model';

export type MovieApi = {
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
  categories?: CategoryApi[];
  snapshots?: string[];
};

export function normalizeMovie(input: MovieApi) {
  return {
    // eslint-disable-next-line no-underscore-dangle
    id: input?._id,
    createdAt: input?.createdAt,
    createdBy: input?.createdBy,
    deletedAt: input?.deletedAt,
    url: input?.url,
    title: input?.title,
    description: input?.description,
    categories: input?.categories && input?.categories.map((category) => normalizeCategory(category)),
    snapshots: input?.snapshots,
  };
}

export type Movie = ReturnType<typeof normalizeMovie>;
