import { InputJsonValue } from "../../types";
import { AssignmentsUpdateManyWithoutUsersInput } from "./AssignmentsUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  name?: string | null;
  role?: "Option1" | null;
  assignmentsItems?: AssignmentsUpdateManyWithoutUsersInput;
};
