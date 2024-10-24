import { forwardRef } from "react";
import { OptionsDropdown } from "../../../shared/OptionsDropdown/OptionsDropdown";
import { useAuth } from "../../../../context/AuthContext";
import UserProfile from "../../../../assets/icons/ui/UserProfile";
import Logout from "../../../../assets/icons/ui/Logout";

interface ProfileActionsProps {
  anchorEl: null | SVGSVGElement;
  handleClose: () => void;
}

const ProfileActions = forwardRef<HTMLDivElement, ProfileActionsProps>(
  ({ anchorEl, handleClose }, ref) => {
    const { logout } = useAuth();

    const ProfileOptions = [
      {
        icon: <UserProfile />,
        optionText: "Profile Settings",
        routeLink: "/profile/settings",
      },
      {
        icon: <Logout />,
        optionText: "Logout",
        routeLink: "/logout",
        onClick: logout,
      },
    ];

    return (
      <OptionsDropdown
        options={ProfileOptions}
        anchorEl={anchorEl}
        handleClose={handleClose}
      />
    );
  },
);

export default ProfileActions;
