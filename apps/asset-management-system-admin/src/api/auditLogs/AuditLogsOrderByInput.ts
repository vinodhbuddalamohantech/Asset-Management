import { SortOrder } from "../../util/SortOrder";

export type AuditLogsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  details?: SortOrder;
  event?: SortOrder;
  timestamp?: SortOrder;
  userId?: SortOrder;
};
