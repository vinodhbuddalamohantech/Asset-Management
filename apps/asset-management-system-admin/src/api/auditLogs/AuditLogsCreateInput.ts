import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AuditLogsCreateInput = {
  details?: string | null;
  event?: string | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
