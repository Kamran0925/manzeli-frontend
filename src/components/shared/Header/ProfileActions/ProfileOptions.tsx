import React from "react";
import UserProfile from "../../../../assets/icons/ui/UserProfile";
import Logout from "../../../../assets/icons/ui/Logout";

export const ProfileOptions = [
  {
    icon: <UserProfile />,
    optionText: "Profile Settings",
    routeLink: "/profile/settings",
  },
  { icon: <Logout />, optionText: "Logout", routeLink: "/logout" },
];
