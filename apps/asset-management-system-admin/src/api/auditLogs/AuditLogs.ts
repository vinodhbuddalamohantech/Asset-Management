import { User } from "../user/User";

export type AuditLogs = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  details: string | null;
  event: string | null;
  timestamp: Date | null;
  user?: User | null;
};
