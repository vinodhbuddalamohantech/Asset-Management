import { AssetsCreateNestedManyWithoutDepartmentsItemsInput } from "./AssetsCreateNestedManyWithoutDepartmentsItemsInput";

export type DepartmentsCreateInput = {
  name?: string | null;
  description?: string | null;
  assetsItems?: AssetsCreateNestedManyWithoutDepartmentsItemsInput;
};
