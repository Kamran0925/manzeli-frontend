import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import FillCross from "../../../assets/icons/ui/FillCross";
import Document from "../../../assets/icons/ui/Document";
import Cloud from "../../../assets/icons/ui/Cloud";
import classNames from "classnames";
import styles from "./CSVModal.module.css";

interface CSVModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  actionBtnText: string;
  showCrossIcon?: boolean;
}

const CSVModal: React.FC<CSVModalProps> = ({
  open,
  onClose,
  title,
  description,
  actionBtnText,
  showCrossIcon = false,
}) => {
  const [fillColor, setFillColor] = useState("none");

  return (
    <Dialog
      open={open}
      onClose={onClose}
      className={styles.dialog}
      sx={{
        "& .MuiDialog-paper": {
          width: "939px !important",
          maxWidth: "none",
        },
        "& .css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
          margin: 0,
          borderRadius: "12px",
        },
      }}
    >
      <DialogTitle className={styles.titleContainer}>
        <Typography className={styles.title}>{title}</Typography>
        {showCrossIcon && (
          <FillCross onClick={onClose} style={{ cursor: "pointer" }} />
        )}
      </DialogTitle>
      <DialogContent className={styles.dialogContent}>
        <Typography className={styles.description}>{description}</Typography>

        <Box className={styles.contentContainer}>
          <Box className={styles.fileUploadContainer}>
            <Cloud />
            <Typography className={styles.uploadText}>
              Click or drag file to this area to upload
            </Typography>
          </Box>
          <Typography className={styles.formatText}>
            Formats accepted are csv
          </Typography>
          <Typography className={styles.templateText}>
            Note: The uploaded file must match the template.
            <Link className={styles.templateLink} to={""}>
              View Example
            </Link>
          </Typography>
          <Button
            variant="outlined"
            className={styles.downloadBtn}
            onMouseEnter={() => setFillColor("white")}
            onMouseLeave={() => setFillColor("none")}
          >
            <Document fill={fillColor} /> Download Sample Template
          </Button>
        </Box>
      </DialogContent>
      <DialogActions className={styles.actions}>
        <Button
          onClick={onClose}
          variant="outlined"
          className={classNames(styles.btn, styles.cancelBtn)}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          className={classNames(styles.btn, styles.actionBtn)}
        >
          {actionBtnText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CSVModal;
