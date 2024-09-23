import React from "react";
import { Typography } from "@mui/material";
import styles from "./Pagination.module.css";

interface PaginationProps {
  totalResults: number;
  resultsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalResults,
  resultsPerPage,
  currentPage,
  onPageChange,
}) => {
  return (
    <Typography className={styles.pageResults}>
      Showing {(currentPage - 1) * resultsPerPage + 1}-
      {Math.min(currentPage * resultsPerPage, totalResults)} of {totalResults}{" "}
      Results
    </Typography>
  );
};

export default Pagination;
