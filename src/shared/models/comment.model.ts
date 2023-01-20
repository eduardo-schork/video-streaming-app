export type CommentApi = {
  _id: string;
  createdAt: number;
  createdBy: string;
  updatedAt?: number;
  updatedBy?: string;
  deletedAt?: number;
  deletedBy?: string;
  text: string;
  movieId: string;
  subComments: CommentApi[];
};

export function normalizeComment(input: CommentApi): Comment {
  return {
    // eslint-disable-next-line no-underscore-dangle
    id: input?._id,
    createdAt: input?.createdAt,
    createdBy: input?.createdBy,
    deletedAt: input?.deletedAt,
    text: input?.text,
    movieId: input.movieId,
    subComments: input.subComments,
  };
}

export type Comment = {
  id: string;
  movieId: string;
  text: string;
  createdAt: number;
  createdBy: string;
  deletedAt?: number;
  subComments: CommentApi[];
};
