import { AssignmentsWhereInput } from "./AssignmentsWhereInput";
import { AssignmentsOrderByInput } from "./AssignmentsOrderByInput";

export type AssignmentsFindManyArgs = {
  where?: AssignmentsWhereInput;
  orderBy?: Array<AssignmentsOrderByInput>;
  skip?: number;
  take?: number;
};
