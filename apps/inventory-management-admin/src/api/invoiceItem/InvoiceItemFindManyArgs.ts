import { InvoiceItemWhereInput } from "./InvoiceItemWhereInput";
import { InvoiceItemOrderByInput } from "./InvoiceItemOrderByInput";

export type InvoiceItemFindManyArgs = {
  where?: InvoiceItemWhereInput;
  orderBy?: Array<InvoiceItemOrderByInput>;
  skip?: number;
  take?: number;
};
