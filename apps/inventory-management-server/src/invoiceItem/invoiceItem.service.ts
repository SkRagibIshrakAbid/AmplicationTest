import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InvoiceItemServiceBase } from "./base/invoiceItem.service.base";

@Injectable()
export class InvoiceItemService extends InvoiceItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
