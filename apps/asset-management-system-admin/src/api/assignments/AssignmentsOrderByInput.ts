import { SortOrder } from "../../util/SortOrder";

export type AssignmentsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  assignmentDate?: SortOrder;
  returnDate?: SortOrder;
  userId?: SortOrder;
  assetId?: SortOrder;
};
