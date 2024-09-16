import { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import classNames from "classnames";
import FormInput from "../../../../shared/FormInput/FormInput";
import { PropertyFieldConfig } from "../PropertyFormFields/PropertyFieldConfig";
import styles from "./PropertyForm.module.css";

interface FormState {
  [key: string]: {
    value: string;
    error?: string;
  };
}

interface PropertyFormProps {
  title: string;
  formFields: PropertyFieldConfig[];
}

const PropertyForm: React.FC<PropertyFormProps> = ({ title, formFields }) => {
  const [formData, setFormData] = useState<FormState>({});

  const validate = (value: string, field: PropertyFieldConfig) => {
    let errorStatements = "";
    const { validation } = field.fieldConfig;

    if (validation && validation.required && !value.trim()) {
      errorStatements = "This field is required";
    }

    handleChange(field.fieldId, value, errorStatements);
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
        <Typography className={styles.title}>{title}</Typography>
      </Box>

      <Box className={styles.content}>
        <Grid container>
          {formFields.map((field, key) => (
            <Grid
              item
              xs={12}
              sm={field.fieldConfig.type === "checkbox" ? 12 : 6}
              md={field.fieldConfig.type === "checkbox" ? 12 : 4}
              key={key}
            >
              <FormInput
                field={field}
                value={formData[field.fieldId]?.value}
                onChange={validate}
                error={formData[field.fieldId]?.error}
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
