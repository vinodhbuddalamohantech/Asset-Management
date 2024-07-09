import { Departments as TDepartments } from "../api/departments/Departments";

export const DEPARTMENTS_TITLE_FIELD = "name";

export const DepartmentsTitle = (record: TDepartments): string => {
  return record.name?.toString() || String(record.id);
};
