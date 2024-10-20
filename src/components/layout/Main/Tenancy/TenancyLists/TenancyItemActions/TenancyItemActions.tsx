import { forwardRef } from "react";
import { OptionsDropdown } from "../../../../../shared/OptionsDropdown/OptionsDropdown";

interface TenancyItemActionsProps {
  anchorEl: null | SVGSVGElement | HTMLButtonElement;
  handleClose: () => void;
  tenantActions: any;
}

const TenancyItemActions = forwardRef<HTMLDivElement, TenancyItemActionsProps>(
  props => {
    if (!props.anchorEl) return null;

    return <OptionsDropdown options={props.tenantActions} {...props} />;
  },
);

export default TenancyItemActions;
