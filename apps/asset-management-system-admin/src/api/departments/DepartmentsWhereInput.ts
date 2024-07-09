import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AssetsListRelationFilter } from "../assets/AssetsListRelationFilter";

export type DepartmentsWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  assetsItems?: AssetsListRelationFilter;
};
