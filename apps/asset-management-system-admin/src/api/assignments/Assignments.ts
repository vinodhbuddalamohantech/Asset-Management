import { User } from "../user/User";
import { Assets } from "../assets/Assets";

export type Assignments = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  assignmentDate: Date | null;
  returnDate: Date | null;
  user?: User | null;
  asset?: Assets | null;
};
