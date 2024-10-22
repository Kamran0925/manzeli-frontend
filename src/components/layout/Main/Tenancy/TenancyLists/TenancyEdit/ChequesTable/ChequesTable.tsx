import React, { useState } from "react";
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
import Plus from "../../../../../../../assets/icons/ui/Plus";
import styles from "./ChequesTable.module.css";
import ActionModal from "../../../../../../shared/ActionModal/ActionModal";

export interface Cheque {
  chequeNo: string;
  value: number;
  date: string;
}

interface ChequesTableProps {
  chequesData: Cheque[];
}

const ChequesTable: React.FC<ChequesTableProps> = ({ chequesData }) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Typography
        sx={{
          color: "#000",
          fontSize: "16px",
          fontWeight: 500,
          lineHeight: "100%",
        }}
      >
        Cheques Table
      </Typography>
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
                Cheque Image
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
                <TableCell
                  onClick={() => setModal(true)}
                  className={styles.tableCell}
                  align="center"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: 0,
                    borderBottom: "1px solid #e3e3e3",
                    cursor: "pointer",
                  }}
                >
                  <Box className={styles.chequeImage}></Box>
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
            component="span"
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
      <ActionModal
        open={modal}
        onClose={() => setModal(false)}
        title={"Cheque Image"}
        description={
          <Box
            className={styles.chequeImage}
            sx={{
              width: "85%",
              height: "253px",
              boxSizing: "border-box",
              flexShrink: 0,
              display: "flex",
              margin: "0 auto 37px",
              padding: 0,
              border: 0,
            }}
          ></Box>
        }
        showActions={false}
      />
    </>
  );
};

export default ChequesTable;
