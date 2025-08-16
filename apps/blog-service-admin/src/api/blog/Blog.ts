import { Comment } from "../comment/Comment";
import { User } from "../user/User";

export type Blog = {
  comments?: Array<Comment>;
  createdAt: Date;
  description: string | null;
  featureImage: string | null;
  id: string;
  keyword: string | null;
  metaDescription: string | null;
  metaTitle: string | null;
  published: boolean | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
