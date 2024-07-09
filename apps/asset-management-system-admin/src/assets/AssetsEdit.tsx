import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
} from "react-admin";

import { AssignmentsTitle } from "../assignments/AssignmentsTitle";
import { DepartmentsTitle } from "../departments/DepartmentsTitle";

export const AssetsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
        <SelectInput
          source="typeField"
          label="type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="assignmentsItems"
          reference="Assignments"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AssignmentsTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="department.id"
          reference="Departments"
          label="department"
        >
          <SelectInput optionText={DepartmentsTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
