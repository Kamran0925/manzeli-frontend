import React, { useState } from "react";
import { Grid, Typography, Box, Link } from "@mui/material";

import Tile from "../../shared/Tile/Tile";
import styles from "./SecondarySection.module.css";
import { accountTypes } from "../../shared/AccountTypes/AccountTypes";

const SecondarySection = () => {
  const [hoveredTileIndex, setHoveredTileIndex] = useState<number | null>(null);

  return (
    <>
      <Box component="section" className={styles.container}>
        <Box style={{ marginLeft: "auto", display: "inline" }}>
          <Typography variant="body1">
            Already have an account?{" "}
            <Link color="primary" variant="h4">
              Sign in
            </Link>
          </Typography>
        </Box>

        <Box
          sx={{
            margin: {
              xs: "50px 0px 0px 0px",
            },
            maxWidth: "440px",
          }}
        >
          <Typography variant="h3">Join Us!</Typography>

          <Typography variant="body1">
            To begin, please select the type of account you would like to
            create.
          </Typography>

          <Box
            sx={{
              margin: "20px 0px 0px 0px",
              maxWidth: "440px",
            }}
          >
            <Grid container spacing={2} direction={"column"}>
              <Grid item xs={12}>
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

export default SecondarySection;
