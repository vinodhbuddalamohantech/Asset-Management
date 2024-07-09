import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AssetsWhereUniqueInput } from "../assets/AssetsWhereUniqueInput";

export type AssignmentsUpdateInput = {
  assignmentDate?: Date | null;
  returnDate?: Date | null;
  user?: UserWhereUniqueInput | null;
  asset?: AssetsWhereUniqueInput | null;
};
