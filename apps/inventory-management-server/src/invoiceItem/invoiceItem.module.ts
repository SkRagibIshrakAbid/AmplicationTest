import { Module } from "@nestjs/common";
import { InvoiceItemModuleBase } from "./base/invoiceItem.module.base";
import { InvoiceItemService } from "./invoiceItem.service";
import { InvoiceItemController } from "./invoiceItem.controller";
import { InvoiceItemResolver } from "./invoiceItem.resolver";

@Module({
  imports: [InvoiceItemModuleBase],
  controllers: [InvoiceItemController],
  providers: [InvoiceItemService, InvoiceItemResolver],
  exports: [InvoiceItemService],
})
export class InvoiceItemModule {}
