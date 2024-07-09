import { AssetsUpdateManyWithoutDepartmentsItemsInput } from "./AssetsUpdateManyWithoutDepartmentsItemsInput";

export type DepartmentsUpdateInput = {
  name?: string | null;
  description?: string | null;
  assetsItems?: AssetsUpdateManyWithoutDepartmentsItemsInput;
};
