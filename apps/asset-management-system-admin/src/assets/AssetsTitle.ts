import { Assets as TAssets } from "../api/assets/Assets";

export const ASSETS_TITLE_FIELD = "name";

export const AssetsTitle = (record: TAssets): string => {
  return record.name?.toString() || String(record.id);
};
