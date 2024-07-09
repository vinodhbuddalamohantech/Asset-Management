import { AssignmentsUpdateManyWithoutAssetsItemsInput } from "./AssignmentsUpdateManyWithoutAssetsItemsInput";

export type AssetsUpdateInput = {
  name?: string | null;
  description?: string | null;
  typeField?: "Option1" | null;
  status?: "Option1" | null;
  assignmentsItems?: AssignmentsUpdateManyWithoutAssetsItemsInput;
};
