import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Grid from '@mui/material/Grid';

export default function MenuAppBar() {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate('/home'); 
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        style={{
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1200,
        }}
      >
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={3} display="flex" alignItems="center">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuClick}
              >
                <ArrowBackIosIcon />
              </IconButton>
              <Typography variant="h6" component="div">
                Back to Home
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="h6"
                component="div"
                align="center"
                sx={{
                    fontFamily: 'monospace',
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                    letterSpacing: '.1rem',
                  }}
              >
                Elysian
              </Typography>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
