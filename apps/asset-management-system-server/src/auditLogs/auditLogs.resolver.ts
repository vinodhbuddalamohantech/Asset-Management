import * as graphql from "@nestjs/graphql";
import { AuditLogsResolverBase } from "./base/auditLogs.resolver.base";
import { AuditLogs } from "./base/AuditLogs";
import { AuditLogsService } from "./auditLogs.service";

@graphql.Resolver(() => AuditLogs)
export class AuditLogsResolver extends AuditLogsResolverBase {
  constructor(protected readonly service: AuditLogsService) {
    super(service);
  }
}
