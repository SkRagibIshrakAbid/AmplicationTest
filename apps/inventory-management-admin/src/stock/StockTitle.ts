import { Stock as TStock } from "../api/stock/Stock";

export const STOCK_TITLE_FIELD = "id";

export const StockTitle = (record: TStock): string => {
  return record.id?.toString() || String(record.id);
};
