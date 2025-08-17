import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import LocalCafeRoundedIcon from '@mui/icons-material/LocalCafeRounded';


export const navbarItems = [
  {
    id: 0,
    icon: <HomeRoundedIcon />,
    label: 'Home',
    route: '/',
  },
  {
    id: 1,
    icon: <AutoAwesomeRoundedIcon />,
    label: 'About',
    route: '/about',
  },
  {
    id: 2,
    icon: <LocalCafeRoundedIcon />,
    label: 'Contact',
    route: '/contact',
  }
];