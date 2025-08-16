import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BlogWhereInput = {
  comments?: CommentListRelationFilter;
  description?: StringNullableFilter;
  featureImage?: StringNullableFilter;
  id?: StringFilter;
  keyword?: StringNullableFilter;
  metaDescription?: StringNullableFilter;
  metaTitle?: StringNullableFilter;
  published?: BooleanNullableFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
