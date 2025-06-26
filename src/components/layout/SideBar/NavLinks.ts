import Grid from '../../../assets/icons/ui/Grid';
import Home from '../../../assets/icons/ui/Home';
import Tenant from '../../../assets/icons/ui/Tenant';
import Plan from '../../../assets/icons/ui/Plan';
import Settings from '../../../assets/icons/ui/Settings';
import Apartment from '../../../assets/icons/ui/Apartment';

export const NAV_LINKS = [
  {
    route: '/dashboard',
    icon: Grid,
    label: 'Dashboard',
  },
  {
    route: '/property/listings',
    icon: Home,
    label: 'Properties',
  },
  {
    route: '/property/apartment-building',
    icon: Apartment,
    label: 'Apartment Building',
  },
  {
    route: '/tenancy',
    icon: Tenant,
    label: 'Tenancy Contracts',
  },
  {
    route: '/pricing',
    icon: Plan,
    label: 'Plans & Billing',
  },
  {
    route: '/settings',
    icon: Settings,
    label: 'Settings',
  },
];
