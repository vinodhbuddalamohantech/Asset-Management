import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssignmentsServiceBase } from "./base/assignments.service.base";

@Injectable()
export class AssignmentsService extends AssignmentsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
