import { forwardRef } from "react";
import { OptionsDropdown } from "../../../../../../shared/OptionsDropdown/OptionsDropdown";

interface PropertyItemActionsProps {
  anchorEl: null | SVGSVGElement | HTMLButtonElement;
  handleClose: () => void;
  propertyActions: any;
}

const PropertyItemActions = forwardRef<
  HTMLDivElement,
  PropertyItemActionsProps
>(({ anchorEl, handleClose, propertyActions }) => {
  if (!anchorEl) return null;

  return (
    <OptionsDropdown
      options={propertyActions}
      anchorEl={anchorEl}
      handleClose={handleClose}
    />
  );
});

export default PropertyItemActions;
