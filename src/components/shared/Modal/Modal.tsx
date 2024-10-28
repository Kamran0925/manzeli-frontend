import React, { ReactElement } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import FillCross from "../../../assets/icons/ui/FillCross";
import classNames from "classnames";
import styles from "./Modal.module.css";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  showClose: boolean;
  title: string;
  description: string | ReactElement;
  showActions: boolean;
  primaryBtnText: string;
  onClickPrimaryBtn: () => void;
  secondaryBtnText: string;
  onClickSecondaryBtn: () => void;
}

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  showClose,
  title,
  description,
  showActions = true,
  primaryBtnText,
  onClickPrimaryBtn,
  secondaryBtnText,
  onClickSecondaryBtn,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      className={styles.dialog}
      sx={{
        "& .css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
          margin: 0,
          borderRadius: "8px",
          maxWidth: "none",
        },
      }}
    >
      <DialogTitle className={styles.title}>
        {title}
        {showClose && (
          <FillCross onClick={onClose} style={{ cursor: "pointer" }} />
        )}
      </DialogTitle>
      <DialogContent>{description}</DialogContent>
      {showActions && (
        <DialogActions className={styles.actions}>
          <Button
            onClick={onClickSecondaryBtn}
            variant="outlined"
            className={classNames(styles.btn, styles.cancelBtn)}
          >
            {secondaryBtnText}
          </Button>
          <Button
            onClick={onClickPrimaryBtn}
            variant="contained"
            className={classNames(styles.btn, styles.deleteBtn)}
          >
            {primaryBtnText}
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
};

export default Modal;
