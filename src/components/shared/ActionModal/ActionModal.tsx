import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import FillCross from "../../../assets/icons/ui/FillCross";
import styles from "./ActionModal.module.css";

interface ActionModalProps {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
  title: string;
  description: string;
  actionBtnText: string;
}

const ActionModal: React.FC<ActionModalProps> = ({
  open,
  onClose,
  onDelete,
  title,
  description,
  actionBtnText,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      className={styles.dialog}
      sx={{
        "& .css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
          margin: 0,
          width: "600px",
          borderRadius: "12px",
          boxShadow:
            "0px 20px 25px -8px rgba(0, 0, 0, 0.06),0px 8px 10px -6px rgba(0, 0, 0, 0.08), 0px 0px 0px 1px rgba(0, 0, 0, 0.06)",
        },
      }}
    >
      <DialogTitle className={styles.title}>
        {title}
        <FillCross onClick={onClose} style={{ cursor: "pointer" }} />
      </DialogTitle>
      <DialogContent className={styles.description}>
        {description}
      </DialogContent>
      <DialogActions className={styles.actions}>
        <Button
          onClick={onClose}
          variant="contained"
          className={styles.cancelBtn}
        >
          Cancel
        </Button>
        <Button
          onClick={onDelete}
          variant="contained"
          className={styles.deleteBtn}
        >
          {actionBtnText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ActionModal;
