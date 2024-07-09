import { AuditLogs as TAuditLogs } from "../api/auditLogs/AuditLogs";

export const AUDITLOGS_TITLE_FIELD = "event";

export const AuditLogsTitle = (record: TAuditLogs): string => {
  return record.event?.toString() || String(record.id);
};
