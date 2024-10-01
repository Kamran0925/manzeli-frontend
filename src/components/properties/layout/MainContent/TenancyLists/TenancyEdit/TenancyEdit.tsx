import PropertyHeader from "../../PropertyHeader/PropertyHeader";
import { Box, Button, Typography } from "@mui/material";
import classNames from "classnames";
import { TenantFields } from "./TenantFields";
import FormInput from "../../../../../shared/FormInput/FormInput";
import ChequesTable, { Cheque } from "./ChequesTable/ChequesTable";
import styles from "./TenancyEdit.module.css";

const TenancyEdit = () => {
  const chequesData: Cheque[] = [
    { chequeNo: "1001", value: 1500, date: "01/01/2024" },
    { chequeNo: "1002", value: 1500, date: "02/01/2024" },
    { chequeNo: "1003", value: 1500, date: "03/01/2024" },
  ];

  return (
    <>
      <PropertyHeader />
      <Typography
        sx={{
          color: "#020615",
          fontSize: "32px",
          fontWeight: 500,
          lineHeight: "110%",
          marginTop: "27px",
        }}
      >
        Manage Tenancy
      </Typography>

      <Box className={styles.container}>
        <Box className={styles.editHeader}>
          <Typography className={styles.title1}>Tenancy Edit</Typography>
        </Box>

        <Box className={styles.fieldsEditContainer}>
          {Object.entries(TenantFields).map(([section, fields]) => (
            <>
              <Typography className={styles.fieldsSubtitle}>
                {section}
              </Typography>
              <Box className={styles.fieldWrapper}>
                {fields.map((field, index) => (
                  <FormInput
                    field={field}
                    value={field.fieldConfig.value}
                    onChange={() => null}
                    error=""
                  />
                ))}
              </Box>
            </>
          ))}
          <ChequesTable chequesData={chequesData} />
        </Box>

        <Box className={styles.detailActions}>
          <Button
            variant="outlined"
            className={classNames(styles.btn, styles.backBtn)}
          >
            Back
          </Button>
          <Button
            variant="contained"
            className={classNames(styles.btn, styles.editBtn)}
          >
            Save
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default TenancyEdit;
