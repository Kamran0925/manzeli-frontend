import { forwardRef } from "react";
import { OptionsDropdown } from "../../../../../../shared/OptionsDropdown/OptionsDropdown";
import { PropertyActions } from "./PropertyActions";

interface PropertyItemActionsProps {
  anchorEl: null | SVGSVGElement | HTMLButtonElement;
  handleClose: () => void;
}

const PropertyItemActions = forwardRef<
  HTMLDivElement,
  PropertyItemActionsProps
>(({ anchorEl, handleClose }) => {
  if (!anchorEl) return null;

  return (
    <OptionsDropdown
      options={PropertyActions}
      anchorEl={anchorEl}
      handleClose={handleClose}
      showCross={true}
    />
  );
});

export default PropertyItemActions;
