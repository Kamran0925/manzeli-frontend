import React from "react";
import { useState } from "react";
import { Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import SortDownArrow from "../../../../../assets/icons/ui/SortDownArrow";
import SortUpArrow from "../../../../../assets/icons/ui/SortUpArrow";
import classNames from "classnames";
import { Data, data } from "./data";
import styles from "./BillingHistory.module.css";

type SortDirection = "ascending" | "descending";

interface SortConfig {
  key: keyof Data;
  direction: SortDirection;
}

const initialSortConfig: SortConfig = {
  key: "invoiceId",
  direction: "ascending",
};

const BillingHistory = () => {
  const [sortConfig, setSortConfig] = useState<SortConfig>(initialSortConfig);

  const sortedRows = React.useMemo(() => {
    let sortableRows = [...data];
    if (sortConfig !== null) {
      sortableRows.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableRows;
  }, [data, sortConfig]);

  const sortData = (key: keyof Data) => {
    let direction: SortDirection = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const displaySortArrow = (key: keyof Data) => {
    if (sortConfig.key !== key) {
      return <SortDownArrow />;
    }

    return sortConfig.direction === "ascending" ? (
      <SortDownArrow />
    ) : (
      <SortUpArrow />
    );
  };

  return (
    <Box className={styles.billingSection}>
      <Typography className={styles.billingHistory}>Billing History</Typography>
      <Typography className={styles.billingHistoryDescription}>
        Effortlessly handle your billing and invoices right here.
      </Typography>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                className={styles.tableHeader}
                onClick={() => sortData("invoiceId")}
              >
                Invoice ID {displaySortArrow("invoiceId")}
              </TableCell>
              <TableCell
                className={styles.tableHeader}
                onClick={() => sortData("billingDate")}
              >
                Billing Date {displaySortArrow("billingDate")}
              </TableCell>
              <TableCell
                className={styles.tableHeader}
                onClick={() => sortData("plan")}
              >
                Plan {displaySortArrow("plan")}
              </TableCell>
              <TableCell
                className={styles.tableHeader}
                onClick={() => sortData("amount")}
                align="center"
              >
                Amount {displaySortArrow("amount")}
              </TableCell>
              <TableCell
                className={styles.tableHeader}
                onClick={() => sortData("status")}
                align="center"
              >
                Status {displaySortArrow("status")}
              </TableCell>
              <TableCell className={styles.tableHeader} align="center">
                Download Invoice
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedRows.map(row => (
              <>
                <TableRow
                  key={row.invoiceId}
                  className={`${styles.tableRow} ${styles.rowSpacing}`}
                  sx={{
                    marginBottom: "15px",
                    display: "table-row",
                  }}
                >
                  <TableCell className={styles.tableData}>
                    #{row.invoiceId}
                  </TableCell>
                  <TableCell className={styles.tableData}>
                    {row.billingDate}
                  </TableCell>
                  <TableCell className={styles.tableData}>{row.plan}</TableCell>
                  <TableCell className={styles.tableData} align="center">
                    ${row.amount}
                  </TableCell>
                  <TableCell
                    className={classNames(styles.tableData)}
                    align="center"
                  >
                    <Box className={styles.tag}>{row.status}</Box>
                  </TableCell>
                  <TableCell
                    className={classNames(styles.tableData, styles.link)}
                    align="center"
                  >
                    {row.downloadInvoice}
                  </TableCell>
                </TableRow>
                <br />
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default BillingHistory;
