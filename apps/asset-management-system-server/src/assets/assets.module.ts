import { Module } from "@nestjs/common";
import { AssetsModuleBase } from "./base/assets.module.base";
import { AssetsService } from "./assets.service";
import { AssetsController } from "./assets.controller";
import { AssetsResolver } from "./assets.resolver";

@Module({
  imports: [AssetsModuleBase],
  controllers: [AssetsController],
  providers: [AssetsService, AssetsResolver],
  exports: [AssetsService],
})
export class AssetsModule {}
