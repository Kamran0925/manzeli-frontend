import { Button, Box, Typography } from "@mui/material";
import classNames from "classnames";
import FormInput from "../../../../shared/FormInput/FormInput";
import { ProfileFields } from "./ProfileFields";
import FileUpload from "../../../../../assets/icons/ui/FileUpload";
import Trash2 from "../../../../../assets/icons/ui/Trash2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../../../shared/Modal/Modal";
import VerifyCurrentEmail from "./VerifyCurrentEmail/VerifyCurrentEmail";
import UpdateEmail from "./UpdateEmail/UpdateEmail";
import VerifyOTP from "./VerifyOTP/VerifyOTP";
import EmailUpdated from "./EmailUpdated/EmailUpdated";
import UpdatePassword from "./UpdatePassword/UpdatePassword";
import PasswordUpdated from "./PasswordUpdated/PasswordUpdated";
import styles from "./ProfileManagement.module.css";

const ProfileManagement = () => {
  const navigate = useNavigate();
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [flowType, setFlowType] = useState<"email" | "password" | null>(null);

  const alignField = (section: string, index: number): string => {
    const defaultWidth = "528px";

    if (section !== "Personal Details") return defaultWidth;

    return index === 0
      ? "calc(528px - 60%)"
      : index === 1
      ? "calc(60% - 4px)"
      : defaultWidth;
  };

  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [primaryAction, setPrimaryAction] = useState<boolean>(false);

  const openModal = (index: number) => setModalIndex(index);
  const closeModal = () => {
    setModalIndex(null);
    setFlowType(null);
  };

  const handleClick = (link: string) => {
    setFlowType(link === "Change Email" ? "email" : "password");
    openModal(0);
  };

  const modals = {
    email: [
      // {
      //   title: "Verify Your Current Email Address",
      //   description: <VerifyCurrentEmail />,
      //   primaryBtnText: "Send Verification Email",
      //   onClickPrimaryBtn: () => {
      //     openModal(1);
      //   },
      // },
      {
        title: "Change Email",
        description: (
          <UpdateEmail
            isSubmit={isSubmit}
            setIsSubmit={setIsSubmit}
            openModal={openModal}
            setPrimaryAction={(val: boolean) => setPrimaryAction(val)}
          />
        ),
        primaryBtnText: "Send OTP",
        onClickPrimaryBtn: () => {
          setIsSubmit(true);
        },
        loading: isSubmit,
      },
      {
        title: "Verify OTP",
        description: (
          <VerifyOTP
            isSubmit={isSubmit}
            setIsSubmit={setIsSubmit}
            openModal={openModal}
            setPrimaryAction={(val: boolean) => setPrimaryAction(val)}
          />
        ),
        primaryBtnText: "Verify and Update Email",
        onClickPrimaryBtn: () => {
          setIsSubmit(true);
        },
        loading: isSubmit,
      },
      {
        title: "Email Changed Successfully!",
        description: <EmailUpdated isSuccess={true} />,
        primaryBtnText: "Go to Dashboard",
        onClickPrimaryBtn: () => {
          closeModal();
          navigate("/property/listings");
        },
      },
    ],
    password: [
      {
        title: "Change Password",
        description: (
          <UpdatePassword
            isSubmit={isSubmit}
            setIsSubmit={setIsSubmit}
            openModal={openModal}
          />
        ),
        primaryBtnText: "Save Changes",
        onClickPrimaryBtn: () => {
          setIsSubmit(true);
        },
        loading: isSubmit,
      },
      {
        title: "Password Changed Successfully!",
        description: <PasswordUpdated isSuccess={true} />,
        primaryBtnText: "Go to Dashboard",
        onClickPrimaryBtn: () => {
          navigate("/property/listings");
        },
        secondaryBtnText: "Back to Profile Management",
      },
    ],
  };

  interface ModalProps {
    title: string;
    description: any;
    primaryBtnText: string;
    onClickPrimaryBtn: () => void;
    secondaryBtnText?: string;
    loading?: boolean | undefined;
  }

  const currentModal: ModalProps | null = flowType
    ? modals[flowType][modalIndex!]
    : null;

  return (
    <Box>
      <Box className={styles.profileContainer}>
        <Box className={styles.profilePicture} />
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
            }}
          >
            <Typography className={styles.fieldsSubtitle}>{section}</Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
              {fields.map((field, index) => (
                <FormInput
                  key={index}
                  field={field}
                  value={field.fieldConfig.value}
                  onChange={() => null}
                  error=""
                  customStyle={{
                    marginTop: "18px",
                    width: { xs: "100%", sm: alignField(section, index) },
                  }}
                  onLinkClick={handleClick}
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

      {currentModal && (
        <Modal
          open={true}
          onClose={closeModal}
          showClose={false}
          title={currentModal.title}
          description={currentModal.description}
          showActions={true}
          primaryBtnText={currentModal.primaryBtnText}
          onClickPrimaryBtn={currentModal.onClickPrimaryBtn}
          disablePrimaryAction={primaryAction}
          secondaryBtnText={currentModal?.secondaryBtnText || "Cancel"}
          onClickSecondaryBtn={closeModal}
          loading={currentModal?.loading}
        />
      )}
    </Box>
  );
};

export default ProfileManagement;
