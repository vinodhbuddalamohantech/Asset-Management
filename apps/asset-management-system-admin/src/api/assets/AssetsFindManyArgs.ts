import { AssetsWhereInput } from "./AssetsWhereInput";
import { AssetsOrderByInput } from "./AssetsOrderByInput";

export type AssetsFindManyArgs = {
  where?: AssetsWhereInput;
  orderBy?: Array<AssetsOrderByInput>;
  skip?: number;
  take?: number;
};
