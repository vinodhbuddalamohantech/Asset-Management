import { SortOrder } from "../../util/SortOrder";

export type AssetsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  typeField?: SortOrder;
  status?: SortOrder;
};
