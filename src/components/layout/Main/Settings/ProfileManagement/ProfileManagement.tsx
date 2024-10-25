import { Button, Box, Typography } from "@mui/material";
import classNames from "classnames";
import FormInput from "../../../../shared/FormInput/FormInput";
import { ProfileFields } from "./ProfileFields";
import FileUpload from "../../../../../assets/icons/ui/FileUpload";
import Trash2 from "../../../../../assets/icons/ui/Trash2";
import styles from "./ProfileManagement.module.css";

const ProfileManagement = () => {
  const alignField = (section: string, index: number): string => {
    const defaultWidth = "528px";

    if (section !== "Personal Details") {
      return defaultWidth;
    }

    switch (index) {
      case 0:
        return "calc(528px - 60%)";
      case 1:
        return "calc(60% - 4px)";
      default:
        return defaultWidth;
    }
  };

  return (
    <Box>
      <Box className={styles.profileContainer}>
        <Box className={styles.profilePicture}></Box>
        <Box className={styles.profileUpload}>
          <Typography className={styles.profileText}>
            We support PNGs and JPEGs under 10MB
          </Typography>
          <Box className={styles.profileActions}>
            <Button
              variant="contained"
              className={classNames(styles.profileBtn, styles.uploadBtn)}
            >
              <FileUpload /> Upload Image
            </Button>
            <Button className={classNames(styles.profileBtn, styles.removeBtn)}>
              <Trash2 /> Remove
            </Button>
          </Box>
        </Box>
      </Box>

      <Box className={styles.formContainer}>
        {Object.entries(ProfileFields).map(([section, fields]) => (
          <Box
            key={section}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              flexWrap: "nowrap",
            }}
          >
            <Typography className={styles.fieldsSubtitle}>{section}</Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "4px",
              }}
            >
              {fields.map((field, index) => (
                <FormInput
                  key={index}
                  field={field}
                  value={field.fieldConfig.value}
                  onChange={() => null}
                  error=""
                  customStyle={{
                    marginTop: "18px",
                    width: {
                      xs: "100%",
                      sm: alignField(section, index),
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        ))}
      </Box>

      <Box className={styles.actions}>
        <Button
          variant="outlined"
          className={classNames(styles.btn, styles.saveBtn)}
        >
          Save Changes
        </Button>
        <Button
          variant="contained"
          className={classNames(styles.btn, styles.cancelBtn)}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileManagement;
