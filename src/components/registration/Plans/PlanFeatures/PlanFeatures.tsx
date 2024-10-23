import React from "react";
import { Box, Typography } from "@mui/material";
import CheckmarkIcon from "../../../../assets/icons/ui/Checkmark";

interface PlanFeaturesProps {
  plantype: string;
}

const features = ["Multi-step Zaps", "3 Premium Apps", "2 Users Team"];

const PlanFeatures: React.FC<PlanFeaturesProps> = ({ plantype }) => {
  return (
    <Box>
      {features?.map((feature, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "8px",
            flexShrink: 0,
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
