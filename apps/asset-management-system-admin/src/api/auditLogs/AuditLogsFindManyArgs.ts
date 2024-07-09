import { AuditLogsWhereInput } from "./AuditLogsWhereInput";
import { AuditLogsOrderByInput } from "./AuditLogsOrderByInput";

export type AuditLogsFindManyArgs = {
  where?: AuditLogsWhereInput;
  orderBy?: Array<AuditLogsOrderByInput>;
  skip?: number;
  take?: number;
};
