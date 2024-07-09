import { Module } from "@nestjs/common";
import { AuditLogsModuleBase } from "./base/auditLogs.module.base";
import { AuditLogsService } from "./auditLogs.service";
import { AuditLogsController } from "./auditLogs.controller";
import { AuditLogsResolver } from "./auditLogs.resolver";

@Module({
  imports: [AuditLogsModuleBase],
  controllers: [AuditLogsController],
  providers: [AuditLogsService, AuditLogsResolver],
  exports: [AuditLogsService],
})
export class AuditLogsModule {}
