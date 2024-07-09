import { Assignments } from "../assignments/Assignments";
import { Departments } from "../departments/Departments";

export type Assets = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  typeField?: "Option1" | null;
  status?: "Option1" | null;
  assignmentsItems?: Array<Assignments>;
  department?: Departments | null;
};
