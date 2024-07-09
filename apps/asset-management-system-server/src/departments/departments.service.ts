import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DepartmentsServiceBase } from "./base/departments.service.base";

@Injectable()
export class DepartmentsService extends DepartmentsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
