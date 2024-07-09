import { Assignments as TAssignments } from "../api/assignments/Assignments";

export const ASSIGNMENTS_TITLE_FIELD = "id";

export const AssignmentsTitle = (record: TAssignments): string => {
  return record.id?.toString() || String(record.id);
};
