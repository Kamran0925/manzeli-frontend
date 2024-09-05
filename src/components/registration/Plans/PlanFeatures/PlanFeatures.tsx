import React from "react";
import { Box, Typography } from "@mui/material";
import CheckmarkIcon from "../../../../assets/icons/ui/Checkmark";

interface PlanFeaturesProps {
  plantype: string;
  features: string[];
}

const PlanFeatures: React.FC<PlanFeaturesProps> = ({ plantype, features }) => {
  return (
    <Box>
      {features.map((feature, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "8px",
            gap: "10px",
          }}
        >
          <CheckmarkIcon />
          <Typography
            sx={{
              color: plantype === "Company" ? "#FFFFFF" : "#848199",
              fontSize: {
                xs: "15px",
                md: "12px",
                lg: "15px",
              },
              fontWeight: 500,
              lineHeight: "normal",
              flexShrink: 0,
            }}
          >
            {feature}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default PlanFeatures;
