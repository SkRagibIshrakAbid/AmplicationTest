import * as graphql from "@nestjs/graphql";
import { BranchResolverBase } from "./base/branch.resolver.base";
import { Branch } from "./base/Branch";
import { BranchService } from "./branch.service";

@graphql.Resolver(() => Branch)
export class BranchResolver extends BranchResolverBase {
  constructor(protected readonly service: BranchService) {
    super(service);
  }
}
