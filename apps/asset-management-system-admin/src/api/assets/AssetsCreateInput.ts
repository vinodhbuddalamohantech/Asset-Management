import { AssignmentsCreateNestedManyWithoutAssetsItemsInput } from "./AssignmentsCreateNestedManyWithoutAssetsItemsInput";

export type AssetsCreateInput = {
  name?: string | null;
  description?: string | null;
  typeField?: "Option1" | null;
  status?: "Option1" | null;
  assignmentsItems?: AssignmentsCreateNestedManyWithoutAssetsItemsInput;
};
