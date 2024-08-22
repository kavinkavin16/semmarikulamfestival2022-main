// components
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  user: getIcon('ic_user'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
  icon_sent: getIcon('icon_sent')
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'Options',
    items: [
      { title: 'Posts(பதிவுகள்)', path: '/dashboard/four', icon: ICONS.dashboard },
      { title: 'Incomes(வரவு)', path: '/dashboard/one', icon: ICONS.user },
      { title: 'Expenses(செலவு)', path: '/dashboard/three', icon: ICONS.analytics },
      { title: 'Pay(வங்கி விவரங்கள்)', path: '/dashboard/two', icon: ICONS.ecommerce },
    ],
  }
];

export default sidebarConfig;
