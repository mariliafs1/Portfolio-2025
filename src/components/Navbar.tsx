import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { navbarItems } from './enums/navbarItems';

import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const drawerWidth = 220;

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: 'black',
          color: 'white',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar className="font-logo font-bold text-3xl flex justify-center items-center h-20">
        Mf.
      </Toolbar>
      <Divider />
      <List className='font-main'>
        {navbarItems.map((item) => {
          const isSelected = location.pathname === item.route;

          return (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                onClick={() => navigate(item.route)}
                className={`
                  relative hover:text-white
                 'text-white' 
                  transition-colors duration-200
                `}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />

                <span
                  className={`
                    absolute top-1/2 left-0 h-0.5 bg-[linear-gradient(135deg,#FFB147,#FF6C63,#B86ADF)]
                    transform -translate-y-1/2 origin-left scale-x-0
                    transition-transform duration-300 ease-out
                    ${isSelected ? 'scale-x-100' : 'hover:scale-x-100'}
                  `}
                  style={{ width: '100%' }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider />
    </Drawer>
  );
}