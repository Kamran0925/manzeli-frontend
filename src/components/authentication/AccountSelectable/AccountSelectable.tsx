import React, { useState } from "react";
import { Grid, Typography, Box, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import Tile from "../../shared/Tile/Tile";
import { accountTypes } from "../../shared/AccountTypes/AccountTypes";
import { useFormContext } from "../../../context/FormContext";
import styles from "./AccountSelectable.module.css";

const AccountSelectable = () => {
  const [hoveredTileIndex, setHoveredTileIndex] = useState<number | null>(null);

  const { nextStep } = useFormContext();

  const handleStep = () => {
    nextStep();
  };

  return (
    <>
      <Box component="section" className={styles.box1}>
        <Box sx={{ marginLeft: "auto", display: "flex" }}>
          <Typography variant="body1">
            Already have an account?{" "}
            <MuiLink
              component={Link}
              color="primary"
              variant="body1"
              to="/login"
            >
              Sign in
            </MuiLink>
          </Typography>
        </Box>

        <Box className={styles.box2}>
          <Typography variant="h3">Join Us!</Typography>

          <Typography
            variant="body1"
            sx={{
              width: {
                xs: "100%",
                sm: "80%",
              },
            }}
          >
            To begin, please select the type of account you would like to
            create.
          </Typography>

          <Box
            sx={{
              marginTop: "20px",
              maxWidth: "440px",
            }}
          >
            <Grid container spacing={2} direction={"column"}>
              <Grid item xs={12} onClick={handleStep}>
                {accountTypes.map((accountType, index) => (
                  <Box
                    key={index}
                    onMouseEnter={() => setHoveredTileIndex(index)}
                    onMouseLeave={() => setHoveredTileIndex(null)}
                  >
                    <Tile
                      title={accountType.title}
                      description={accountType.description}
                      isHovered={index === hoveredTileIndex}
                      index={index}
                    />
                  </Box>
                ))}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AccountSelectable;
