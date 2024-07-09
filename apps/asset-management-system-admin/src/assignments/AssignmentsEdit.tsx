import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";
import { AssetsTitle } from "../assets/AssetsTitle";

export const AssignmentsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="assignment_date" source="assignmentDate" />
        <DateTimeInput label="return_date" source="returnDate" />
        <ReferenceInput source="user.id" reference="User" label="user_">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="asset.id" reference="Assets" label="asset_">
          <SelectInput optionText={AssetsTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
