import { CommentCreateNestedManyWithoutBlogsInput } from "./CommentCreateNestedManyWithoutBlogsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BlogCreateInput = {
  comments?: CommentCreateNestedManyWithoutBlogsInput;
  description?: string | null;
  featureImage?: string | null;
  keyword?: string | null;
  metaDescription?: string | null;
  metaTitle?: string | null;
  published?: boolean | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
