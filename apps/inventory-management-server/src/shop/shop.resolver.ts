import * as graphql from "@nestjs/graphql";
import { ShopResolverBase } from "./base/shop.resolver.base";
import { Shop } from "./base/Shop";
import { ShopService } from "./shop.service";

@graphql.Resolver(() => Shop)
export class ShopResolver extends ShopResolverBase {
  constructor(protected readonly service: ShopService) {
    super(service);
  }
}
