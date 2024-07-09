import { AssignmentsCreateNestedManyWithoutAssetsItemsInput } from "./AssignmentsCreateNestedManyWithoutAssetsItemsInput";
import { DepartmentsWhereUniqueInput } from "../departments/DepartmentsWhereUniqueInput";

export type AssetsCreateInput = {
  name?: string | null;
  description?: string | null;
  typeField?: "Option1" | null;
  status?: "Option1" | null;
  assignmentsItems?: AssignmentsCreateNestedManyWithoutAssetsItemsInput;
  department?: DepartmentsWhereUniqueInput | null;
};
