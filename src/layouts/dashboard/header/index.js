import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar } from '@mui/material';
// hooks
import useYears from '../../../hooks/useYears';
import useOffSetTop from '../../../hooks/useOffSetTop';
import useResponsive from '../../../hooks/useResponsive';
// utils
import cssStyles from '../../../utils/cssStyles';
// config
import { HEADER, NAVBAR } from '../../../config';
// components
import Logo from '../../../components/Logo';
import Iconify from '../../../components/Iconify';
import { IconButtonAnimate } from '../../../components/animate';
//
import AccountPopover from './AccountPopover';
import AppData from '../../../pages/data.json';
import AppData2023 from '../../../pages/data2023.json';

// ----------------------------------------------------------------------

const RootStyle = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'isCollapse' && prop !== 'isOffset' && prop !== 'verticalLayout',
})(({ isCollapse, isOffset, verticalLayout, theme }) => ({
  ...cssStyles(theme).bgBlur(),
  boxShadow: 'none',
  height: HEADER.MOBILE_HEIGHT,
  zIndex: theme.zIndex.appBar + 1,
  transition: theme.transitions.create(['width', 'height'], {
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('lg')]: {
    height: HEADER.DASHBOARD_DESKTOP_HEIGHT,
    width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH + 1}px)`,
    ...(isCollapse && {
      width: `calc(100% - ${NAVBAR.DASHBOARD_COLLAPSE_WIDTH}px)`,
    }),
    ...(isOffset && {
      height: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
    }),
    ...(verticalLayout && {
      width: '100%',
      height: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
      backgroundColor: theme.palette.background.default,
    }),
  },
}));

// ----------------------------------------------------------------------

DashboardHeader.propTypes = {
  onOpenSidebar: PropTypes.func,
  isCollapse: PropTypes.bool,
  verticalLayout: PropTypes.bool,
};

export default function DashboardHeader({ onOpenSidebar, isCollapse = false, verticalLayout = false }) {
  const isOffset = useOffSetTop(HEADER.DASHBOARD_DESKTOP_HEIGHT) && !verticalLayout;
  const { year } = useYears();
  const isDesktop = useResponsive('up', 'lg');
  const DataLoad = year === 2022 ? AppData : AppData2023;
  const totalCollection = DataLoad.collection.reduce(
    (accumulator, currentValue) => accumulator + currentValue.amount,
    0
  );
  const totalExp = DataLoad.expenseData.reduce(
    (accumulator, currentValue) => accumulator + currentValue.totalAmount,
    0
  );

  return (
    <RootStyle
      style={{
        borderBottomWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderStyle: 'solid',
        borderColor: 'lightgray',
      }}
      isCollapse={isCollapse}
      isOffset={isOffset}
      verticalLayout={verticalLayout}
    >
      <Toolbar
        sx={{
          minHeight: '100% !important',
          px: { lg: 5 },
        }}
      >
        {isDesktop && verticalLayout && <Logo sx={{ mr: 2.5 }} />}

        {!isDesktop && (
          <IconButtonAnimate onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary' }}>
            <Iconify icon="eva:menu-2-fill" />
          </IconButtonAnimate>
        )}

        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
          <Stack direction="column">
            <Stack direction="row" mr={2}>
              <Box color={'black'}>மொத்த வரவு</Box>
              <Box color={'green'} ml={1}>
                {`₹${new Intl.NumberFormat('en-IN').format(totalCollection)}`}
              </Box>
            </Stack>
            <Stack direction="row" mr={2}>
              <Box color={'black'}>இருப்பு</Box>
              <Box color={'green'} ml={1}>
                {`₹${new Intl.NumberFormat('en-IN').format(totalCollection - totalExp)}`}
              </Box>
            </Stack>
            <Stack direction="row" mr={2}>
              <Box color={'black'}>செலவு</Box>
              <Box color={'red'} ml={1}>
                {`₹${new Intl.NumberFormat('en-IN').format(totalExp)}`}
              </Box>
            </Stack>
          </Stack>
          <AccountPopover />
        </Stack>
      </Toolbar>
    </RootStyle>
  );
}
