import { Blog } from "../blog/Blog";
import { Comment } from "../comment/Comment";
import { JsonValue } from "type-fest";

export type User = {
  blogs?: Array<Blog>;
  comments?: Array<Comment>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
