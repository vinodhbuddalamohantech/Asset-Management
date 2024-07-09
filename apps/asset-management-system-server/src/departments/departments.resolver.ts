import * as graphql from "@nestjs/graphql";
import { DepartmentsResolverBase } from "./base/departments.resolver.base";
import { Departments } from "./base/Departments";
import { DepartmentsService } from "./departments.service";

@graphql.Resolver(() => Departments)
export class DepartmentsResolver extends DepartmentsResolverBase {
  constructor(protected readonly service: DepartmentsService) {
    super(service);
  }
}
