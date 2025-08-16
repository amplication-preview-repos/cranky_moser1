import { Blog as TBlog } from "../api/blog/Blog";

export const BLOG_TITLE_FIELD = "metaTitle";

export const BlogTitle = (record: TBlog): string => {
  return record.metaTitle?.toString() || String(record.id);
};
