import { Branch as TBranch } from "../api/branch/Branch";

export const BRANCH_TITLE_FIELD = "id";

export const BranchTitle = (record: TBranch): string => {
  return record.id?.toString() || String(record.id);
};
