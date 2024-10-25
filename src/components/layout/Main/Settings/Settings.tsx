import React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import Header from "../../../shared/Header/Header";
import ProfileManagement from "./ProfileManagement/ProfileManagement";
import styles from "./Settings.module.css";

const profileTabs = [
  { value: "profile", label: "Profile Management" },
  { value: "subscription", label: "Active Subscription & Plans" },
  { value: "billing", label: "Billing History" },
];

const Settings = () => {
  const [value, setValue] = React.useState(profileTabs[0].value);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const renderTabContent = () => {
    switch (value) {
      case "profile":
        return <ProfileManagement />;
      default:
        return null;
    }
  };

  return (
    <Box className={styles.settings}>
      <Header title="Settings" className="smallerHeading" />
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        className={styles.tabs}
      >
        {profileTabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            value={tab.value}
            className={styles.tab}
          />
        ))}
      </Tabs>
      <Box className={styles.tabContent}>{renderTabContent()}</Box>
    </Box>
  );
};

export default Settings;
