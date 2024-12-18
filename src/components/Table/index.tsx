import { useState } from "react";
import styles from "./table.module.css";
import { useProjectData } from "../../lib/api/projects/hooks";
import { getMappedKey } from "../../utils/getMappedKeys";
import Pagination from "../Pagination";
import Loader from "../Loader";
import { getModifiedRowData } from "../../utils/getModifiedRowData";
import { ProjectFetchedType } from "../../lib/api/projects/types";

const Table = () => {
  const { data = [], isLoading, error } = useProjectData();
  const headers: (keyof ProjectFetchedType)[] = [
    "s.no",
    "percentage.funded",
    "amt.pledged",
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + rowsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prevPage) => prevPage + 1);
  };

  if (!isLoading) return <Loader />;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.tableHeaderContainer}>
          <tr>
            {headers.map((column) => (
              <th key={`${column}-column`} className={styles.tableHeaderText}>
                {getMappedKey(column.toString())}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className={styles.tableBody}>
          {paginatedData.map((row: ProjectFetchedType, index: number) => (
            <tr
              key={row["s.no"] || startIndex + index}
              className={styles.tableRowWrapper}
            >
              {headers.map((header: keyof ProjectFetchedType) => (
                <td
                  key={`${row["s.no"] || startIndex + index}-${header}`}
                  className={styles.tableRowItem}
                >
                  {getModifiedRowData(row, header)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Table;
