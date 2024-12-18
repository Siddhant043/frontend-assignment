import styles from "./pagination.module.css";

type PaginationProps = {
  handlePrevious: () => void;
  handleNext: () => void;
  currentPage: number;
  totalPages: number;
};

const Pagination = ({
  handlePrevious,
  handleNext,
  currentPage,
  totalPages,
}: PaginationProps) => {
  return (
    <div className={styles.paginationContainer}>
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={styles.paginationButton}
      >
        Previous
      </button>
      <span className={styles.paginationInfo}>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={styles.paginationButton}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
