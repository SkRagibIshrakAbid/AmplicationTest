import * as graphql from "@nestjs/graphql";
import { InvoiceItemResolverBase } from "./base/invoiceItem.resolver.base";
import { InvoiceItem } from "./base/InvoiceItem";
import { InvoiceItemService } from "./invoiceItem.service";

@graphql.Resolver(() => InvoiceItem)
export class InvoiceItemResolver extends InvoiceItemResolverBase {
  constructor(protected readonly service: InvoiceItemService) {
    super(service);
  }
}
