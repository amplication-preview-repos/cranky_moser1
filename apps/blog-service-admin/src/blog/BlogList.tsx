import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const BlogList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Blogs"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
