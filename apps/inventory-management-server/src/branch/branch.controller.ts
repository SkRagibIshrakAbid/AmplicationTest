import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BranchService } from "./branch.service";
import { BranchControllerBase } from "./base/branch.controller.base";

@swagger.ApiTags("branches")
@common.Controller("branches")
export class BranchController extends BranchControllerBase {
  constructor(protected readonly service: BranchService) {
    super(service);
  }
}
