import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { ASSETS_TITLE_FIELD } from "./AssetsTitle";
import { DEPARTMENTS_TITLE_FIELD } from "../departments/DepartmentsTitle";

export const AssetsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="description" source="description" />
        <TextField label="type" source="typeField" />
        <TextField label="status" source="status" />
        <ReferenceField
          label="department"
          source="departments.id"
          reference="Departments"
        >
          <TextField source={DEPARTMENTS_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Assignments"
          target="assetId"
          label="AssignmentsItems"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="assignment_date" source="assignmentDate" />
            <TextField label="return_date" source="returnDate" />
            <ReferenceField label="user_" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="asset_"
              source="assets.id"
              reference="Assets"
            >
              <TextField source={ASSETS_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
