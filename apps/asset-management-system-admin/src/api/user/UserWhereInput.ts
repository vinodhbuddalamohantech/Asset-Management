import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AssignmentsListRelationFilter } from "../assignments/AssignmentsListRelationFilter";
import { AuditLogsListRelationFilter } from "../auditLogs/AuditLogsListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  name?: StringNullableFilter;
  role?: "Option1";
  assignmentsItems?: AssignmentsListRelationFilter;
  auditLogsItems?: AuditLogsListRelationFilter;
};
