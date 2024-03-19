import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import AdminLoginIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FAQIcon from '@mui/icons-material/HelpOutline';
import TestimonialsIcon from '@mui/icons-material/RateReview';
import ServiceBookingIcon from '@mui/icons-material/EventAvailable';
import LogoutIcon from '@mui/icons-material/Logout';
import { DirectionsBoat } from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';
import '../assets/css/Sidebar.css';

export default function ButtonAppBar() {
  const background = {
    backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/314/373/297/background-blue-boat-calm-wallpaper-preview.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '130vh',
    width: '16vw',
    margin: 0,
  };
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const navigate = useNavigate();  
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpenDrawer(open);
  };

  const handleNavigation = (path) => {
    navigate(path);
    toggleDrawer(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 1 }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
        <div style={background}>
          <div style={{ width: '250px' }}>
            <List>
              <br/>
              <center>Welcome Back!</center>
              <ListItem button onClick={() => handleNavigation('/profile')}>
                <AdminLoginIcon />
                <ListItemText primary="Profile" />
              </ListItem>
              <ListItem button onClick={() => handleNavigation('/main')}>
                <DashboardIcon />
                <ListItemText primary="Admin Dashboard" />
              </ListItem>
              <ListItem button onClick={() => handleNavigation('/book')}>
              <DirectionsBoat/>
                <ListItemText primary="Boat House Services" />
              </ListItem>
              <ListItem button onClick={() => handleNavigation('/settings')}>
                <FAQIcon />
                <ListItemText primary="Settings" />
              </ListItem>
              <ListItem button onClick={() => handleNavigation('/user')}>
                <TestimonialsIcon />
                <ListItemText primary="User Information" />
              </ListItem>
              <ListItem button onClick={() => handleNavigation('/booknow')}>
                <ServiceBookingIcon />
                <ListItemText primary="Boat House Booking" />
              </ListItem>
              <ListItem button onClick={() => handleNavigation('/login')}>
                <LogoutIcon />
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </div>
        </div>
      </Drawer>
    </Box>
  );
}
