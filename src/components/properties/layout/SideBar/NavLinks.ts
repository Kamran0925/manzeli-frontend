import Grid from "../../../../assets/icons/ui/Grid";
import Home from "../../../../assets/icons/ui/Home";
import Message from "../../../../assets/icons/ui/Message";
import Tenant from "../../../../assets/icons/ui/Tenant";
import Plan from "../../../../assets/icons/ui/Plan";

export const NAV_LINKS = [
  {
    route: "/dashboard",
    icon: Grid,
    label: "Dashboard",
  },
  {
    route: "/properties",
    icon: Home,
    label: "Properties",
  },
  {
    route: "/messages",
    icon: Message,
    label: "Messages",
  },
  {
    route: "/tenants",
    icon: Tenant,
    label: "Tenants",
  },
  {
    route: "/plans-billing",
    icon: Plan,
    label: "Plans & Billing",
  },
];
