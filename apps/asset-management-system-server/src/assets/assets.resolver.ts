import * as graphql from "@nestjs/graphql";
import { AssetsResolverBase } from "./base/assets.resolver.base";
import { Assets } from "./base/Assets";
import { AssetsService } from "./assets.service";

@graphql.Resolver(() => Assets)
export class AssetsResolver extends AssetsResolverBase {
  constructor(protected readonly service: AssetsService) {
    super(service);
  }
}
