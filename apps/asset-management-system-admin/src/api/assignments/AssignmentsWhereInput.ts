import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AssetsWhereUniqueInput } from "../assets/AssetsWhereUniqueInput";

export type AssignmentsWhereInput = {
  id?: StringFilter;
  assignmentDate?: DateTimeNullableFilter;
  returnDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
  asset?: AssetsWhereUniqueInput;
};
