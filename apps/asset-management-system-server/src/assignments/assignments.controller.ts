import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssignmentsService } from "./assignments.service";
import { AssignmentsControllerBase } from "./base/assignments.controller.base";

@swagger.ApiTags("assignments")
@common.Controller("assignments")
export class AssignmentsController extends AssignmentsControllerBase {
  constructor(protected readonly service: AssignmentsService) {
    super(service);
  }
}
