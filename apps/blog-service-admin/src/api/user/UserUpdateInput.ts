import { BlogUpdateManyWithoutUsersInput } from "./BlogUpdateManyWithoutUsersInput";
import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  blogs?: BlogUpdateManyWithoutUsersInput;
  comments?: CommentUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
