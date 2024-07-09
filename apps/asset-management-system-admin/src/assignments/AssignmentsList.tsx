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
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { ASSETS_TITLE_FIELD } from "../assets/AssetsTitle";

export const AssignmentsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AssignmentsItems"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="asset_" source="assets.id" reference="Assets">
          <TextField source={ASSETS_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
