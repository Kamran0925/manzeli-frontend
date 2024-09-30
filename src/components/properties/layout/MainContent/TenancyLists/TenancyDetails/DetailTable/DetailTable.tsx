import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import styles from "./DetailTable.module.css";

const DetailTable: React.FC = () => {
  const chequesData = [
    { chequeNo: 1001, value: "$1,500", date: "01/01/2024" },
    { chequeNo: 1002, value: "$1,500", date: "02/01/2024" },
    { chequeNo: 1003, value: "$1,500", date: "03/01/2024" },
  ];

  return (
    <Box className={styles.detailsTable}>
      <Typography className={styles.title2}>Cheques Table</Typography>
      <TableContainer className={styles.table}>
        <Table>
          <TableHead className={styles.tableHead}>
            <TableRow>
              <TableCell className={styles.tableHeaderCell}>
                Cheque No.
              </TableCell>
              <TableCell className={styles.tableHeaderCell} align="center">
                Cheque Value
              </TableCell>
              <TableCell className={styles.tableHeaderCell} align="center">
                Cheque Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {chequesData.map(cheque => (
              <TableRow key={cheque.chequeNo}>
                <TableCell scope="row" className={styles.tableCell}>
                  {cheque.chequeNo}
                </TableCell>
                <TableCell className={styles.tableCell} align="center">
                  {cheque.value}
                </TableCell>
                <TableCell className={styles.tableCell} align="center">
                  {cheque.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DetailTable;
