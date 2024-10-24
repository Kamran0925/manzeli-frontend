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
>((props, ref) => {
  if (!props.anchorEl) return null;

  return (
    <OptionsDropdown options={props.propertyActions} {...props} ref={ref} />
  );
});

export default PropertyItemActions;
