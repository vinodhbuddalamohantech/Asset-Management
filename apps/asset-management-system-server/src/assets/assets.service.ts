import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssetsServiceBase } from "./base/assets.service.base";

@Injectable()
export class AssetsService extends AssetsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
