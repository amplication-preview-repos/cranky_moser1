import { BlogWhereUniqueInput } from "../blog/BlogWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentUpdateInput = {
  blog?: BlogWhereUniqueInput | null;
  content?: string | null;
  user?: UserWhereUniqueInput | null;
};
