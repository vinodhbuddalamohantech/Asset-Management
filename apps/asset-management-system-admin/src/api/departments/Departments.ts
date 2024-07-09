import { Assets } from "../assets/Assets";

export type Departments = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  assetsItems?: Array<Assets>;
};
