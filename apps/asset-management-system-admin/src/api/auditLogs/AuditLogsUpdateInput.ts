import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AuditLogsUpdateInput = {
  details?: string | null;
  event?: string | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
