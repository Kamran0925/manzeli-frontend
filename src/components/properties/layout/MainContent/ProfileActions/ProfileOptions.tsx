import Logout from "../../../../../assets/icons/ui/Logout";
import UserProfile from "../../../../../assets/icons/ui/UserProfile";

export const ProfileOptions = [
  {
    icon: (
      <UserProfile height={13} width={13} fill="#7F7F7F" background="#FFF" />
    ),
    optionText: "Profile Settings",
    routeLink: "/profile/settings",
  },
  { icon: <Logout />, optionText: "Logout", routeLink: "/logout" },
];
