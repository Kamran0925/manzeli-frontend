import { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import classNames from "classnames";
import FormInput from "../../../../shared/FormInput/FormInput";
import { ApartmentBuildingDetails } from "../ApartmentBuildingDetails/ApartmentBuildingDetails";
import styles from "./PropertyForm.module.css";

interface FormState {
  [key: string]: {
    value: string;
    error?: string;
  };
}

const PropertyForm = () => {
  const [formData, setFormData] = useState<FormState>({});

  const validate = (fieldId: string, value: string, fieldConfig: any) => {
    let errorStatements = "";
    const { validation } = fieldConfig;

    if (validation && validation.required && !value.trim()) {
      errorStatements = "This field is required";
    }

    handleChange(fieldId, value, errorStatements);
  };

  const handleChange = (
    elementId: string,
    value: string,
    errorStatements: string,
  ) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [elementId]: {
        value,
        error: errorStatements,
      },
    }));
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <Box className={styles.propertyForm}>
      <Box className={styles.header}>
        <Typography className={styles.title}>
          Apartment Building Details
        </Typography>
      </Box>

      <Box className={styles.content}>
        <Grid container>
          {ApartmentBuildingDetails.map((field, key) => (
            <Grid item md={field.fieldType === "checkbox" ? 12 : 4} key={key}>
              <FormInput
                fieldId={field.fieldId}
                fieldLabel={field.fieldLabel}
                fieldType={field.fieldType}
                fieldConfig={field.fieldConfig}
                value={formData[field.fieldId]?.value}
                onChange={validate}
                error={formData[field.fieldId]?.error}
                showLabel={
                  ["buildingId", "contractType"].includes(field.fieldId) && true
                }
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box className={styles.footer}>
        <Button
          className={classNames(styles.btn, styles.cancel)}
          variant="text"
        >
          Cancel
        </Button>
        <Button
          className={classNames(styles.btn, styles.save)}
          variant="contained"
          color="primary"
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default PropertyForm;
