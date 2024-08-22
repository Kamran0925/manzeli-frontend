import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import MobileStepper from "@mui/material/MobileStepper";
import LeftArrow from "../../../assets/icons/ui/LeftArrow";

import plans from "../../common/data/planTypes";
import PlanFeatures from "./PlanFeatures/PlanFeatures";
import { useFormContext } from "../../../context/FormContext";
import styles from "./Plans.module.css";

const Plans = () => {
  const { formState, previousStep } = useFormContext();

  const handleBack = () => {
    previousStep();
  };
  return (
    <>
      <Box
        sx={{
          padding: {
            xs: "20px",
            sm: "20px",
            md: "20px",
            lg: "40px",
          },
          background: "white",
        }}
      >
        <MobileStepper
          variant="text"
          steps={4}
          position="static"
          activeStep={formState.step}
          backButton={
            <Button size="small" onClick={handleBack}>
              <LeftArrow />
              Back
            </Button>
          }
          nextButton={null}
        />
        <Typography variant="h4" sx={{ textAlign: "right" }} color="#8692A6">
          Personal Info.
        </Typography>

        <Box className={styles.box1}>
          <Box className={styles.box2}>
            <Typography
              variant="h3"
              sx={{
                marginRight: "auto",
                color: "#231D4F",
                width: {
                  xs: "100%",
                },
                fontSize: {
                  xs: "24px",
                  sm: "40px",
                },
                lineHeight: {
                  xs: "30px",
                  sm: "normal",
                },
              }}
            >
              Plans & Pricing
            </Typography>

            <Box className={styles.box3}>
              <Typography
                variant="body1"
                sx={{
                  width: {
                    xs: "100%",
                    sm: "60%",
                  },
                  color: "#848199",
                  fontFamily: "Poppins",
                  fontSize: {
                    xs: "14px",
                    sm: "18px",
                  },
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal",
                }}
              >
                Whether your time-saving automation needs are large or small,
                we’re here to help you scale.
              </Typography>
              <Box className={styles.box4}>
                <Button
                  sx={{
                    borderRadius: "22px",
                    background: "#001283",
                    boxShadow: "0px 5px 7px 0px rgba(82, 67, 194, 0.23)",
                    padding: "13px 24px",
                    color: "#fff",
                    fontSize: "12px",
                    height: "44px",
                    width: "110px",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "white",
                      boxShadow: "0px 5px 7px 0px rgba(82, 67, 194, 0.35)",
                      color: "#001283",
                    },
                  }}
                >
                  MONTHLY
                </Button>
                <Button
                  sx={{
                    background: "white",
                    boxShadow: "0px 5px 7px 0px rgba(82, 67, 194, 0.23)",
                    padding: "13px 24px",
                    color: "#3B3472",
                    fontSize: "12px",
                    height: "44px",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#001283",
                      boxShadow: "0px 5px 7px 0px rgba(82, 67, 194, 0.35)",
                      color: "white",
                    },
                  }}
                >
                  YEARLY
                </Button>
              </Box>
            </Box>
          </Box>

          <Grid container className={styles.pricingContainer}>
            {plans.map((plan, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
                sx={{
                  minWidth: "232px",
                  marginTop: "20px",
                  position: {
                    md: plan.type === "Company" ? "relative" : "",
                  },
                }}
              >
                <Box
                  className={plan.type === "Company" ? styles.pricingItem2 : ""}
                >
                  {plan.type === "Company" && (
                    <Typography
                      sx={{
                        borderRadius: "13.5px",
                        backgroundColor: "#FFF",
                        maxWidth: "121px",
                        height: "27px",
                        flexShrink: 0,
                        color: "#001283",
                        textAlign: "center",
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "10px",
                        fontStyle: "normal",
                        fontWeight: 800,
                        lineHeight: "normal",
                        letterSpacing: "0.833px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "auto",
                      }}
                    >
                      MOST POPULAR
                    </Typography>
                  )}
                  <Box className={styles.pricingFeature}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            color:
                              plan.type === "Company" ? "#FFFFFF" : "#001283",
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "36px",
                            fontStyle: "normal",
                            fontWeight: 700,
                            lineHeight: "46px",
                          }}
                        >
                          ${plan.price}
                        </Typography>
                        <Typography
                          sx={{
                            color:
                              plan.type === "Company" ? "#FFFFFF" : "#848199",
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "17px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "normal",
                            alignSelf: "center",
                          }}
                        >
                          /{plan.duration}
                        </Typography>
                      </Box>
                    </Box>

                    <Box>
                      <Typography
                        style={{
                          color:
                            plan.type === "Company" ? "#FFFFFF" : "#001283",
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "28px",
                          fontStyle: "normal",
                          fontWeight: 500,
                          lineHeight: "normal",
                        }}
                      >
                        {plan.type}
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "15px",
                          fontStyle: "normal",
                          fontWeight: 500,
                          lineHeight: "normal",
                          maxWidth: "232px",
                          color: plan.type === "Company" ? "#FFF" : "#848199",
                        }}
                      >
                        {plan.description}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <PlanFeatures
                        plantype={plan.type}
                        features={plan.features}
                      />
                    </Box>
                  </Box>

                  <Box>
                    <Button
                      sx={{
                        borderRadius: "24px",
                        backgroundColor:
                          plan.type === "Company" ? "#FFF" : "#E5E3F6",
                        color: plan.type === "Company" ? "#001283" : "#838199",
                        width: {
                          xs: "100%",
                          sm: "207px",
                        },
                        height: "45px",
                        margin: "0 auto",
                      }}
                    >
                      Choose Plan
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Plans;
