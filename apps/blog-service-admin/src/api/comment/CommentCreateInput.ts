import { BlogWhereUniqueInput } from "../blog/BlogWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentCreateInput = {
  blog?: BlogWhereUniqueInput | null;
  content?: string | null;
  user?: UserWhereUniqueInput | null;
};
