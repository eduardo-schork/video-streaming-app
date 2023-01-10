export type CommentApi = {
  _id: string;
  createdAt: number;
  createdBy: string;
  updatedAt?: number;
  updatedBy?: string;
  deletedAt?: number;
  deletedBy?: string;
  text: string;
  parent?: CommentApi;
  movieId: string;
};

export function normalizeComment(input: CommentApi): Comment {
  return {
    // eslint-disable-next-line no-underscore-dangle
    id: input?._id,
    createdAt: input?.createdAt,
    createdBy: input?.createdBy,
    deletedAt: input?.deletedAt,
    text: input?.text,
    parent: input?.parent && normalizeComment(input?.parent),
    movieId: input.movieId,
  };
}

export type Comment = {
  id: string;
  movieId: string;
  text: string;
  parent?: Comment;
  createdAt: number;
  createdBy: string;
  deletedAt?: number;
};
