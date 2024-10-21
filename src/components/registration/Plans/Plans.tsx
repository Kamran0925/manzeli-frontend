import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Snackbar,
} from "@mui/material";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import MobileStepper from "@mui/material/MobileStepper";
import LeftArrow from "../../../assets/icons/ui/LeftArrow";
import PlanFeatures from "./PlanFeatures/PlanFeatures";
import { useAuth } from "../../../context/AuthContext";
import { formatErrorMessages } from "../../../utils/errorHelper";
import { getSubscriptionPlans } from "../../../api/plans";
import Error from "../../shared/Error/Error";
import Loader from "../../shared/Loader/Loader";
import { Plan } from "../../common/data/planTypes";
import styles from "./Plans.module.css";

export const BillingCycles: Record<string, string> = {
  "010": "Monthly",
  "020": "Quarterly",
  "030": "Yearly",
};

const Plans = () => {
  const { register } = useAuth();
  const [planType, setPlanType] = useState("010");
  const [plans, setPlans] = useState<Plan[]>([]);
  const [error, setError] = useState<string[]>([]);
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/registration");
  };

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    value: string,
  ) => {
    setPlanType(value);
    fetchPlans(value);
  };

  const handleSubmit = async (planId: number) => {
    setError([]);

    try {
      const response = await register(planId);
      console.log("Registration successful:", response);
      setIsRegister(true);
    } catch (err: any) {
      const errorMessages = formatErrorMessages(err.response?.data) || [
        "Client registration failed!",
      ];
      setError(errorMessages);
      console.error("Registration error:", err);
    }
  };

  useEffect(() => {
    if (isRegister) {
      const timer = setTimeout(() => {
        setIsRegister(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isRegister]);

  const fetchPlans = async (planId: string) => {
    try {
      const fetchedPlans = await getSubscriptionPlans();
      setPlans(
        fetchedPlans
          .filter((plan: Plan) => plan.billing_cycle === planId)
          .slice(0, 3)
          .reverse(),
      );
      setLoading(false);
    } catch (error) {
      console.error("Error fetching subscription plans:", error);
      setError(["Failed to fetch subscription plans"]);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchPlans("010");
  }, []);

  return (
    <>
      <Box className={styles.container}>
        <MobileStepper
          variant="text"
          steps={4}
          position="static"
          activeStep={3}
          backButton={
            <Button size="small" onClick={handleClick}>
              <LeftArrow />
              Back
            </Button>
          }
          nextButton={null}
        />
        <Typography variant="h4" align="right" color="#8692A6">
          Personal Info.
        </Typography>

        <Box className={styles.contentWrapper}>
          <Snackbar
            open={isRegister}
            autoHideDuration={3000}
            onClose={() => setIsRegister(false)}
            message="The client has been registered successfully"
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            sx={{
              "& .css-73yezh-MuiPaper-root-MuiSnackbarContent-root": {
                backgroundColor: "#001283",
              },
            }}
          />
          <Box className={styles.pricingContainer1}>
            <Typography variant="h3" className={styles.plansTitle}>
              Plans & Pricing
            </Typography>

            <Box className={styles.align}>
              <Typography
                variant="body1"
                align="right"
                className={styles.plansText}
              >
                Whether your time-saving automation needs are large or small,
                we’re here to help you scale.
              </Typography>
              <ToggleButtonGroup
                value={planType}
                exclusive
                onChange={handleChange}
                className={styles.btnGroup}
              >
                <ToggleButton
                  value="010"
                  className={classNames(styles.btn, {
                    [styles.activeButton]: planType === "010",
                  })}
                >
                  MONTHLY
                </ToggleButton>
                <ToggleButton
                  value="020"
                  className={classNames(styles.btn, {
                    [styles.activeButton]: planType === "020",
                  })}
                >
                  QUARTERLY
                </ToggleButton>
                <ToggleButton
                  value="030"
                  className={classNames(styles.btn, {
                    [styles.activeButton]: planType === "030",
                  })}
                >
                  YEARLY
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {error?.length > 0 && <Error messages={error} />}
          </Box>

          {!loading ? (
            <Box className={styles.pricingContainer2}>
              {plans?.map((plan, index) => (
                <Box
                  key={index}
                  className={styles.pricingItem}
                  sx={{
                    backgroundColor:
                      plan.name === "Company"
                        ? "#001283"
                        : "rgba(255, 255, 255, 0.50)",
                    boxShadow:
                      plan.name === "Company"
                        ? "0px 42px 34px 0px rgba(82, 67, 194, 0.3)"
                        : "none,",
                  }}
                >
                  {plan.name === "Company" && (
                    <Typography className={styles.popularTag}>
                      MOST POPULAR
                    </Typography>
                  )}
                  <Box
                    sx={{ marginTop: plan.name === "Company" ? "0px" : "47px" }}
                    className={styles.pricingFeature}
                  >
                    <Box className={styles.mainPricingTitle}>
                      <Typography
                        className={styles.price}
                        sx={{
                          color:
                            plan.name === "Company" ? "#FFFFFF" : "#001283",
                        }}
                      >
                        ${plan.price}
                      </Typography>
                      <Typography
                        className={styles.duration}
                        sx={{
                          color:
                            plan.name === "Company" ? "#FFFFFF" : "#848199",
                        }}
                      >
                        /{BillingCycles[plan.billing_cycle]}
                      </Typography>
                    </Box>

                    <Box className={styles.planDetails}>
                      <Typography
                        className={styles.planType}
                        sx={{
                          color: plan.name === "Company" ? "#FFF" : "#001283",
                        }}
                      >
                        {plan.name}
                      </Typography>
                      <Typography
                        className={styles.description}
                        sx={{
                          color: plan.name === "Company" ? "#FFF" : "#848199",
                        }}
                      >
                        {plan.memo}
                      </Typography>
                    </Box>

                    <Box className={styles.planFeatures}>
                      <PlanFeatures plantype={plan.name} />
                    </Box>
                  </Box>

                  <Box className={styles.btnContainer}>
                    <Button
                      sx={{
                        color: plan.name === "Company" ? "#001283" : "#838199",
                        backgroundColor:
                          plan.name === "Company" ? "#FFF" : "#E5E3F6",
                        width: {
                          xs: "100%",
                          md: "207px",
                        },
                        opacity: plan.name === "Company" ? "none" : "0.5",
                        "&:hover": {
                          color: plan.name === "Company" ? "#FFF" : "#FFF",
                          backgroundColor:
                            plan.name === "Company" ? "#001283" : "#001283",
                          outline: "2px solid white",
                          opacity: "1",
                        },
                      }}
                      className={styles.planBtn}
                      onClick={() => handleSubmit(plan.id)}
                    >
                      Choose plan
                    </Button>
                  </Box>
                </Box>
              ))}
            </Box>
          ) : (
            <Loader />
          )}
        </Box>
      </Box>
    </>
  );
};

export default Plans;
