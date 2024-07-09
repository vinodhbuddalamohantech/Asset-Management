import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DepartmentsService } from "./departments.service";
import { DepartmentsControllerBase } from "./base/departments.controller.base";

@swagger.ApiTags("departments")
@common.Controller("departments")
export class DepartmentsController extends DepartmentsControllerBase {
  constructor(protected readonly service: DepartmentsService) {
    super(service);
  }
}
