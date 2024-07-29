import React from 'react';
import { Container, Typography, Box, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import PieChartComponent from './PieChartComponent';
import Footer from './footer';
import MenuAppBar from './AppBar';

const tableData = [
  { serial: 1, hallName: 'Birthday Hall', lastViewed: '2024-07-29' },
  { serial: 2, hallName: 'Wedding Hall', lastViewed: '2024-07-28' },
  { serial: 3, hallName: 'Party Hall', lastViewed: '2024-07-27' },
  { serial: 4, hallName: 'Outdoor View', lastViewed: '2024-07-26' }
];

const rowColors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']; // Colors for each row

const Dashboard = () => {
  return (
    <Container>
      <MenuAppBar />
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Overview
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box display="flex" justifyContent="center">
              <PieChartComponent />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h6" gutterBottom>
                What We think You might like
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>S.no</TableCell>
                      <TableCell>Hall Type</TableCell>
                      <TableCell>Last Viewed</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tableData.map((row, index) => (
                      <TableRow key={row.serial} style={{ backgroundColor: rowColors[index % rowColors.length] }}>
                        <TableCell>{row.serial}</TableCell>
                        <TableCell>{row.hallName}</TableCell>
                        <TableCell>{row.lastViewed}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Container>
  );
};

export default Dashboard;
