import { Blog } from "../blog/Blog";
import { User } from "../user/User";

export type Comment = {
  blog?: Blog | null;
  content: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
