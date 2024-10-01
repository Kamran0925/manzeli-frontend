import React from "react";
import {
  Box,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import styles from "./ChequesTable.module.css";
import Plus from "../../../../../../../assets/icons/ui/Plus";

export interface Cheque {
  chequeNo: string;
  value: number;
  date: string;
}

interface ChequesTableProps {
  chequesData: Cheque[];
}

const ChequesTable: React.FC<ChequesTableProps> = ({ chequesData }) => {
  return (
    <>
      <Typography className={styles.fieldsSubtitle}>Cheques Table</Typography>
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
              <TableCell className={styles.tableHeaderCell} align="center">
                Reminder Notification
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
                  ${cheque.value}
                </TableCell>
                <TableCell className={styles.tableCell} align="center">
                  {cheque.date}
                </TableCell>
                <TableCell className={styles.tableCell} align="center">
                  <Checkbox />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Typography className={styles.addRows}>
          <Box
            sx={{
              backgroundColor: "#F4F4F4",
              borderRadius: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Plus />
          </Box>
          Add More Rows
        </Typography>
      </TableContainer>
    </>
  );
};

export default ChequesTable;
