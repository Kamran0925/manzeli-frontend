import Grid from "../../../assets/icons/ui/Grid";
import Home from "../../../assets/icons/ui/Home";
import Message from "../../../assets/icons/ui/Message";
import Unit from "../../../assets/icons/ui/Unit";
import Tenant from "../../../assets/icons/ui/Tenant";
import Plan from "../../../assets/icons/ui/Plan";
import Settings from "../../../assets/icons/ui/Settings";

export const NAV_LINKS = [
  {
    route: "/dashboard",
    icon: Grid,
    label: "Dashboard",
  },
  {
    route: "/property/listings",
    icon: Home,
    label: "Properties",
  },
  {
    route: "/units",
    icon: Unit,
    label: "Units",
  },
  {
    route: "/tenancy",
    icon: Tenant,
    label: "Tenancy Contracts",
  },
  {
    route: "/messages",
    icon: Message,
    label: "Messages",
  },
  {
    route: "/pricing",
    icon: Plan,
    label: "Plans & Billing",
  },
  {
    route: "/settings",
    icon: Settings,
    label: "Settings",
  },
];
