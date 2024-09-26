import { useState } from "react";
import { Grid, Typography, Box, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import Tile from "../../shared/Tile/Tile";
import { accountTypes } from "../../shared/AccountTypes/AccountTypes";
import { AccountType, useFormContext } from "../../../context/FormContext";
import styles from "./AccountSelectable.module.css";

const AccountSelectable = () => {
  const [hoveredTileIndex, setHoveredTileIndex] = useState<number | null>(null);

  const { nextStep, setAccountType } = useFormContext();

  const handleClick = (index: number) => {
    if (index === 0) {
      setAccountType(AccountType.PropertyManagementFirm);
    } else if (index === 1) {
      setAccountType(AccountType.IndividualPropertyOwner);
    }
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
              variant="body1"
              to="/login"
              color="primary"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Sign in
            </MuiLink>
          </Typography>
        </Box>

        <Box className={styles.box2}>
          <Typography variant="h3">Are you?</Typography>
          <Box
            sx={{
              marginTop: "5px",
              maxWidth: "486px",
            }}
          >
            <Grid container direction={"column"}>
              <Grid item xs={12}>
                {accountTypes.map((accountType, index) => (
                  <Box
                    key={index}
                    onMouseEnter={() => setHoveredTileIndex(index)}
                    onMouseLeave={() => setHoveredTileIndex(null)}
                    onClick={() => handleClick(index)}
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
