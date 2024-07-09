import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DEPARTMENTS_TITLE_FIELD } from "../departments/DepartmentsTitle";

export const AssetsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AssetsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
