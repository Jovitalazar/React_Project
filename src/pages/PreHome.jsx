import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MeetingRoomRoundedIcon from '@mui/icons-material/MeetingRoomRounded';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import {Carousal} from '../carousal/Carousal';
import {slides} from '../carousal/crarousalData.json';

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (page) => {
    setAnchorEl(null);
    if (page) {
      navigate(page);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="fixed" sx={{ width: '100%' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            href='/'
            sx={{ mr: 2 }}
          >
            <MeetingRoomRoundedIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Elysian
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={() => handleClose()}
              >
                <MenuItem onClick={() => handleClose('/login')}>Login</MenuItem>
                <MenuItem onClick={() => handleClose('/register')}>Register</MenuItem>
                <MenuItem onClick={() => handleClose('/admin')}>Admin</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1, pt: 8 }}>
        {/* Other content goes here */}
      </Box>
      {/* <ImageSlider/> */}
      <Carousal data={slides}/>
      <Footer />
    </Box>
  );
}
