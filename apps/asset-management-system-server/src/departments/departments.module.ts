import { Module } from "@nestjs/common";
import { DepartmentsModuleBase } from "./base/departments.module.base";
import { DepartmentsService } from "./departments.service";
import { DepartmentsController } from "./departments.controller";
import { DepartmentsResolver } from "./departments.resolver";

@Module({
  imports: [DepartmentsModuleBase],
  controllers: [DepartmentsController],
  providers: [DepartmentsService, DepartmentsResolver],
  exports: [DepartmentsService],
})
export class DepartmentsModule {}
