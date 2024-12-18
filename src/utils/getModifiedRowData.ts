import { ProjectFetchedType } from "../lib/api/projects/types";

export const getModifiedRowData = (
  row: ProjectFetchedType,
  header: keyof ProjectFetchedType
) => {
  let rowData = row[header] !== undefined ? row[header] : "-";

  switch (header) {
    case "amt.pledged":
      rowData = `$ ${row[header]}`;
      break;
    case "percentage.funded":
      rowData = `${row[header]}%`;
      break;
  }

  return rowData;
};
