import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuditLogsServiceBase } from "./base/auditLogs.service.base";

@Injectable()
export class AuditLogsService extends AuditLogsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
