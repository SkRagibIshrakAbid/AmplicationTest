import { SortOrder } from "../../util/SortOrder";

export type StockOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
