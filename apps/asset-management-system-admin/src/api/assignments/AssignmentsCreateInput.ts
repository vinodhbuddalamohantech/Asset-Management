import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AssetsWhereUniqueInput } from "../assets/AssetsWhereUniqueInput";

export type AssignmentsCreateInput = {
  assignmentDate?: Date | null;
  returnDate?: Date | null;
  user?: UserWhereUniqueInput | null;
  asset?: AssetsWhereUniqueInput | null;
};
