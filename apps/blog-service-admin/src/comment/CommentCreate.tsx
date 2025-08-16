import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { BlogTitle } from "../blog/BlogTitle";
import { UserTitle } from "../user/UserTitle";

export const CommentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="blog.id" reference="Blog" label="Blog">
          <SelectInput optionText={BlogTitle} />
        </ReferenceInput>
        <TextInput label="content" multiline source="content" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
