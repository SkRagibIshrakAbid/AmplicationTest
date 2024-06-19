import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ShopService } from "./shop.service";
import { ShopControllerBase } from "./base/shop.controller.base";

@swagger.ApiTags("shops")
@common.Controller("shops")
export class ShopController extends ShopControllerBase {
  constructor(protected readonly service: ShopService) {
    super(service);
  }
}
