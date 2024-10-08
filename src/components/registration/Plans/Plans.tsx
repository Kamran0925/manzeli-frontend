import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Snackbar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MobileStepper from "@mui/material/MobileStepper";
import LeftArrow from "../../../assets/icons/ui/LeftArrow";
import plans from "../../common/data/planTypes";
import PlanFeatures from "./PlanFeatures/PlanFeatures";
import { useAuth } from "../../../context/AuthContext";
import { useFormContext } from "../../../context/FormContext";
import { RegisterationData } from "../../../api/authApi";
import { clientTypes } from "../../shared/AccountTypes/AccountTypes";
import { formatErrorMessages } from "../../../utils/errorHelper";
import Error from "../../shared/Error/Error";
import styles from "./Plans.module.css";

export const BillingCycles = {
  monthly: "010",
  quarterly: "020",
  yearly: "030",
};

const Plans = () => {
  const { register } = useAuth();
  const { formState } = useFormContext();
  const [planType, setPlanType] = useState("monthly");
  const [error, setError] = useState<string[]>([]);
  const [isRegister, setIsRegister] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/registration");
  };

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    value: string,
  ) => {
    setPlanType(value);
  };

  const handleSubmit = async () => {
    setError([]);
    const data: RegisterationData = {
      client_name: formState.username.value,
      client_type: clientTypes[formState.accountType],
      email: formState.email.value,
      telephone: formState.phone.value,
      street: formState.street.value,
      city: formState.city.value,
      country: "AE",
      product: 1,
      billing_cycle: BillingCycles["monthly"],
      billing_interval: 1,
      contact_name: formState.username.value,
      username: formState.email.value,
      password: formState.password.value,
      password_confirmation: formState.confirmPassword.value,
    };

    try {
      const response = await register(data);
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
                  value="monthly"
                  className={styles.monthlyButton}
                  sx={{
                    color: "monthly" === planType ? "#FFF" : "#001283",
                    backgroundColor:
                      "monthly" === planType ? "#001283" : "#FFF",
                  }}
                >
                  MONTHLY
                </ToggleButton>
                <ToggleButton
                  value="yearly"
                  className={styles.yearlyButton}
                  sx={{
                    color: "yearly" === planType ? "#FFF" : "#3B3472",
                    backgroundColor: "yearly" === planType ? "#3B3472" : "#FFF",
                  }}
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

          <Box className={styles.pricingContainer2}>
            {plans.map((plan, index) => (
              <Box
                key={index}
                className={styles.pricingItem}
                sx={{
                  backgroundColor:
                    plan.type === "Company"
                      ? "#001283"
                      : "rgba(255, 255, 255, 0.50)",
                  boxShadow:
                    plan.type === "Company"
                      ? "0px 42px 34px 0px rgba(82, 67, 194, 0.3)"
                      : "none,",
                }}
              >
                {plan.type === "Company" && (
                  <Typography className={styles.popularTag}>
                    MOST POPULAR
                  </Typography>
                )}
                <Box
                  sx={{ marginTop: plan.type === "Company" ? "0px" : "47px" }}
                  className={styles.pricingFeature}
                >
                  <Box className={styles.mainPricingTitle}>
                    <Typography
                      className={styles.price}
                      sx={{
                        color: plan.type === "Company" ? " #FFFFFF" : "#001283",
                      }}
                    >
                      ${plan.price}
                    </Typography>
                    <Typography
                      className={styles.duration}
                      sx={{
                        color: plan.type === "Company" ? " #FFFFFF" : "#848199",
                      }}
                    >
                      /{plan.duration}
                    </Typography>
                  </Box>

                  <Box className={styles.planDetails}>
                    <Typography
                      className={styles.planType}
                      sx={{
                        color: plan.type === "Company" ? "#FFF" : "#001283",
                      }}
                    >
                      {plan.type}
                    </Typography>
                    <Typography
                      className={styles.description}
                      sx={{
                        color: plan.type === "Company" ? "#FFF" : "#848199",
                      }}
                    >
                      {plan.description}
                    </Typography>
                  </Box>

                  <Box className={styles.planFeatures}>
                    <PlanFeatures
                      plantype={plan.type}
                      features={plan.features}
                    />
                  </Box>
                </Box>

                <Box className={styles.btnContainer}>
                  <Button
                    sx={{
                      color: plan.type === "Company" ? "#001283" : "#838199",
                      backgroundColor:
                        plan.type === "Company" ? "#FFF" : "#E5E3F6",
                      width: {
                        xs: "100%",
                        md: "207px",
                      },
                      opacity: plan.type === "Company" ? "none" : "0.5",
                      "&:hover": {
                        color: plan.type === "Company" ? "#FFF" : "#838199",
                        backgroundColor:
                          plan.type === "Company" ? "#001283" : "#E5E3F6",
                        outline: "2px solid white",
                      },
                    }}
                    className={styles.planBtn}
                    onClick={handleSubmit}
                  >
                    Choose plan
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Plans;
