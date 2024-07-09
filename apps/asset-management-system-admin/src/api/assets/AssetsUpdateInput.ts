import { AssignmentsUpdateManyWithoutAssetsItemsInput } from "./AssignmentsUpdateManyWithoutAssetsItemsInput";
import { DepartmentsWhereUniqueInput } from "../departments/DepartmentsWhereUniqueInput";

export type AssetsUpdateInput = {
  name?: string | null;
  description?: string | null;
  typeField?: "Option1" | null;
  status?: "Option1" | null;
  assignmentsItems?: AssignmentsUpdateManyWithoutAssetsItemsInput;
  department?: DepartmentsWhereUniqueInput | null;
};
