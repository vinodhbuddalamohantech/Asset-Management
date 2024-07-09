import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AssignmentsListRelationFilter } from "../assignments/AssignmentsListRelationFilter";

export type AssetsWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  typeField?: "Option1";
  status?: "Option1";
  assignmentsItems?: AssignmentsListRelationFilter;
};
