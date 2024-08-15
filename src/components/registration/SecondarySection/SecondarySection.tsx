import React, { useState } from "react";
import { Grid, Typography, Box } from "@mui/material";

import Tile from "../../shared/Tile/Tile";
import Link from "../../shared/Link/Link";
import styles from "./SecondarySection.module.css";

const accountTypes = [
  {
    title: "Landlord",
    description:
      "Register as a landlord to manage your individual rental properties efficiently.",
  },
  {
    title: "Property Management Company",
    description:
      "Register as a property management company to oversee multiple properties and streamline your business operations",
  },
  {
    title: "Tenant",
    description: "Register as a Tenant to access self-service features",
  },
];

const SecondarySection = () => {
  const [hoveredTileIndex, setHoveredTileIndex] = useState<number | null>(null);

  return (
    <>
      <Box component="section" className={styles.container}>
        <Box style={{ marginLeft: "auto", display: "inline" }}>
          <Typography variant="body1">
            Already have an account? <Link>Sign in</Link>
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
