import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { BLOG_TITLE_FIELD } from "./BlogTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const BlogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="featureImage" source="featureImage" />
        <TextField label="ID" source="id" />
        <TextField label="keyword" source="keyword" />
        <TextField label="metaDescription" source="metaDescription" />
        <TextField label="metaTitle" source="metaTitle" />
        <BooleanField label="published" source="published" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Comment"
          target="blogId"
          label="Comments"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Blog" source="blog.id" reference="Blog">
              <TextField source={BLOG_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
