import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InvoiceItemService } from "./invoiceItem.service";
import { InvoiceItemControllerBase } from "./base/invoiceItem.controller.base";

@swagger.ApiTags("invoiceItems")
@common.Controller("invoiceItems")
export class InvoiceItemController extends InvoiceItemControllerBase {
  constructor(protected readonly service: InvoiceItemService) {
    super(service);
  }
}
