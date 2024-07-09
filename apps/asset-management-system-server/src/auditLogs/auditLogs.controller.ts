import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AuditLogsService } from "./auditLogs.service";
import { AuditLogsControllerBase } from "./base/auditLogs.controller.base";

@swagger.ApiTags("auditLogs")
@common.Controller("auditLogs")
export class AuditLogsController extends AuditLogsControllerBase {
  constructor(protected readonly service: AuditLogsService) {
    super(service);
  }
}
