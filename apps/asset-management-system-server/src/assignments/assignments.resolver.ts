import * as graphql from "@nestjs/graphql";
import { AssignmentsResolverBase } from "./base/assignments.resolver.base";
import { Assignments } from "./base/Assignments";
import { AssignmentsService } from "./assignments.service";

@graphql.Resolver(() => Assignments)
export class AssignmentsResolver extends AssignmentsResolverBase {
  constructor(protected readonly service: AssignmentsService) {
    super(service);
  }
}
