import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssetsService } from "./assets.service";
import { AssetsControllerBase } from "./base/assets.controller.base";

@swagger.ApiTags("assets")
@common.Controller("assets")
export class AssetsController extends AssetsControllerBase {
  constructor(protected readonly service: AssetsService) {
    super(service);
  }
}
