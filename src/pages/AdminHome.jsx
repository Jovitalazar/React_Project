import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from './context/AuthProvider'; 
import Footer from './footer';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  BarChart, Bar, PieChart, Pie, AreaChart, Area
} from 'recharts';
import {
  Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText,
  Divider, Typography, AppBar, Toolbar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import CompanyIcon from '@mui/icons-material/Business'; // Placeholder icon for company name
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const AdminHome = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    setAuth(null);
    navigate('/admin');
  };

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleNavigateToCalendar = () => {
    console.log('Navigating to calendar...');
    navigate('/calender');
  };

  const handleNavigation = (path) => {
    navigate(path);
    setOpen(false);
  };

  const data = [
    { name: '2018', uv: 4000, pv: 2400, amt: 2400, sales: 4000 },
    { name: '2019', uv: 3000, pv: 1398, amt: 2210, sales: 3000 },
    { name: '2020', uv: 2000, pv: 9800, amt: 190, sales: 400 },
    { name: '2021', uv: 2780, pv: 3908, amt: 100, sales: 80 },
    { name: '2022', uv: 1890, pv: 4800, amt: 2181, sales: 1890 },
    { name: '2023', uv: 2390, pv: 3800, amt: 2500, sales: 2390 },
    { name: '2024', uv: 5490, pv: 9300, amt: 2100, sales: 3490 },
  ];

  return (
    <div style={{ display: 'flex' }}>
      {/* AppBar with Menu Icon */}
      <AppBar
        position="fixed"
        style={{
          zIndex: 1200, // Ensures it stays above the drawer
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            style={{ marginRight: '16px' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Side Navigation Drawer */}
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        style={{ width: 240, flexShrink: 0 }}
        PaperProps={{
          style: {
            width: 240,
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
            <CompanyIcon style={{ fontSize: 40 }} />
            <Typography variant="h6" style={{ marginTop: '10px' }}>
              Elysian
            </Typography>
          </div>
          <Divider />
          <List>
            <ListItem button onClick={() => handleNavigation('/adminprofile')}>
              <ListItemIcon><AccountCircleIcon /></ListItemIcon>
              <ListItemText primary="Employees" />
            </ListItem>
            {/* <ListItem button onClick={handleNavigateToCalendar}>
              <ListItemIcon><CalendarTodayIcon /></ListItemIcon>
              <ListItemText primary="Calendar" />
            </ListItem> */}
            <ListItem button onClick={() => handleNavigation('/')}>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={handleLogout}>
              <ListItemIcon><LogoutIcon /></ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </div>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="close"
          onClick={handleDrawerToggle}
          style={{ position: 'absolute', top: 10, left: 20 }}
        >
          <ChevronLeftIcon />
        </IconButton>
      </Drawer>

      {/* Main content area */}
      <main style={{ flexGrow: 1, padding: '20px', marginTop: '64px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {/* Line Chart */}
          <div style={{ flex: '1 1 calc(50% - 20px)', minWidth: '300px' }}>
            <h2>Viewed Vs Booked</h2>
            <LineChart width={600} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
            </LineChart>
          </div>

          {/* Bar Chart */}
          <div style={{ flex: '1 1 calc(50% - 20px)', minWidth: '300px' }}>
            <h2>Advance Payment Accepted Vs Rejected</h2>
            <BarChart width={600} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="uv" fill="#8884d8" />
              <Bar dataKey="pv" fill="#82ca9d" />
            </BarChart>
          </div>

          {/* Pie Chart */}
          <div style={{ flex: '1 1 calc(50% - 20px)', minWidth: '300px' }}>
            <h2>Catered</h2>
            <PieChart width={600} height={300}>
              <Pie
                data={data}
                dataKey="sales"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
                label
              />
              <Tooltip />
            </PieChart>
          </div>

          {/* Area Chart */}
          <div style={{ flex: '1 1 calc(50% - 20px)', minWidth: '300px' }}>
            <h2>Future Scope</h2>
            <AreaChart width={600} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={0.3} fill="#8884d8" />
              <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={0.3} fill="#82ca9d" />
            </AreaChart>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminHome;
