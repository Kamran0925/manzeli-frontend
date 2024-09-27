import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Plus from "../../../../../../assets/icons/ui/Plus";
import styles from "./TenancySubtitleBar.module.css";

interface TenancySubtitleBarProps {
  title?: string;
  subTitleActions?: boolean;
}

const TenancySubtitleBar: React.FC<TenancySubtitleBarProps> = ({
  title,
  subTitleActions = true,
}) => {
  return (
    <Box className={styles.subTitleBar}>
      <Typography className={styles.subTitle}>{title}</Typography>
      {subTitleActions && (
        <Box className={styles.subTitleActions}>
          <Button className={styles.addTenancyButton} variant="contained">
            <Plus /> Add New Tenancy
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default TenancySubtitleBar;
