import React from 'react';
import { Box, Typography, Container, Paper, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuAppBar from './MenuAppBar';

// Styling for the profile image
const ProfileImage = styled('img')({
  borderRadius: '50%',
  width: '150px',
  height: '150px',
  objectFit: 'cover',
});

const AdminProfile = () => {
  // Sample data with different images for four users
  const users = [
    {
      name: 'Macra Miller',
      email: 'jane.doe@example.com',
      address: '1234 Elm Street, Springfield, IL',
      contactNumber: '+1 (555) 123-4567',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYIG2sDiEZ0O2tD7us3_bXzqY36D7wWipHdpBlyK714MpHW5pahQoiZwrdTPIA0QzN_k0&usqp=CAU', // Replace with actual URL
    },
    {
      name: 'John Smith',
      email: 'john.smith@example.com',
      address: '5678 Oak Avenue, Metropolis, NY',
      contactNumber: '+1 (555) 234-5678',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzOv8vxyCR5Nhgp-X8p2ZiKDDaMMKSLNknEQ&s', // Replace with actual URL
    },
    {
      name: 'Andrew Dalton',
      email: 'alice.johnson@example.com',
      address: '9101 Pine Road, Gotham, NJ',
      contactNumber: '+1 (555) 345-6789',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Q0X6WUPY0PIynCe1b3gTADm_xORBaOFG_w&s', // Replace with actual URL
    },
    {
      name: 'Bob Brown',
      email: 'bob.brown@example.com',
      address: '1122 Maple Lane, Star City, TX',
      contactNumber: '+1 (555) 456-7890',
      imageUrl: 'https://cdn.dribbble.com/users/845836/screenshots/4854231/head-gif-2.gif', // Replace with actual URL
    },
  ];

  return (
    <Container component="main" maxWidth="lg" sx={{ marginTop: 8 }}>
      <MenuAppBar />
      <Grid container spacing={4}>
        {users.map((user, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <ProfileImage src={user.imageUrl} alt={`${user.name} Avatar`} />
              <Typography variant="h6" component="h1" sx={{ marginTop: 2 }}>
                {user.name}
              </Typography>
              <Box sx={{ marginTop: 2 }}>
                <Typography variant="body1"><strong>Email:</strong> {user.email}</Typography>
                <Typography variant="body1"><strong>Address:</strong> {user.address}</Typography>
                <Typography variant="body1"><strong>Contact Number:</strong> {user.contactNumber}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AdminProfile;
