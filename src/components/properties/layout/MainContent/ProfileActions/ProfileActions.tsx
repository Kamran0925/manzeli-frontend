import { forwardRef } from "react";
import { OptionsDropdown } from "../../../../shared/OptionsDropdown/OptionsDropdown";
import { ProfileOptions } from "./ProfileOptions";

interface ProfileActionsProps {
  anchorEl: null | SVGSVGElement;
  handleClose: () => void;
}

const ProfileActions = forwardRef<HTMLDivElement, ProfileActionsProps>(
  ({ anchorEl, handleClose }, ref) => {
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
