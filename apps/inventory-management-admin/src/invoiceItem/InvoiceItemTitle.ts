import { InvoiceItem as TInvoiceItem } from "../api/invoiceItem/InvoiceItem";

export const INVOICEITEM_TITLE_FIELD = "id";

export const InvoiceItemTitle = (record: TInvoiceItem): string => {
  return record.id?.toString() || String(record.id);
};
