import { SortOrder } from "../../util/SortOrder";

export type BlogOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  featureImage?: SortOrder;
  id?: SortOrder;
  keyword?: SortOrder;
  metaDescription?: SortOrder;
  metaTitle?: SortOrder;
  published?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
