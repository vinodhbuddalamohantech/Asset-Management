import { DepartmentsWhereInput } from "./DepartmentsWhereInput";
import { DepartmentsOrderByInput } from "./DepartmentsOrderByInput";

export type DepartmentsFindManyArgs = {
  where?: DepartmentsWhereInput;
  orderBy?: Array<DepartmentsOrderByInput>;
  skip?: number;
  take?: number;
};
