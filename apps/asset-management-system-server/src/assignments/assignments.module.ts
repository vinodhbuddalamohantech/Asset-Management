import { Module } from "@nestjs/common";
import { AssignmentsModuleBase } from "./base/assignments.module.base";
import { AssignmentsService } from "./assignments.service";
import { AssignmentsController } from "./assignments.controller";
import { AssignmentsResolver } from "./assignments.resolver";

@Module({
  imports: [AssignmentsModuleBase],
  controllers: [AssignmentsController],
  providers: [AssignmentsService, AssignmentsResolver],
  exports: [AssignmentsService],
})
export class AssignmentsModule {}
