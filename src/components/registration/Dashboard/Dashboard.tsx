import React from 'react';
import styles from './Dashboard.module.css';
import { Box, Grid, Typography, useTheme, Paper } from '@mui/material';
import Header from '../../shared/Header/Header';

const stats = {
  totalListings: 120,
  sold: 80,
  available: 40,
  totalRevenue: 1250000,
  monthlySales: [5, 12, 8, 15, 10, 20, 17, 13, 18, 9, 14, 22],
};

const Dashboard: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Header />
      <Box className={styles.dashboard}>
        <Typography variant="h4" className={styles.heading}>
          RealEstate Data Insights
        </Typography>

        <Box className={styles.container}>
          <Grid container spacing={3} className={styles.grid}>
            {[
              { label: 'Total Listings', value: stats.totalListings },
              { label: 'Sold Properties', value: stats.sold },
              { label: 'Available', value: stats.available },
              { label: 'Total Revenue', value: `$${stats.totalRevenue.toLocaleString()}` },
            ].map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper elevation={3} className={styles.statCard}>
                  <Typography variant="h4">{stat.label}</Typography>
                  <Typography variant="h3">{stat.value}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
        <br />
        <br />

        <Box className={styles.chartWrapper}>
          <Typography variant="h4" className={styles.chartTitle}>
            Monthly Sales Overview
          </Typography>
          <Box className={styles.barChart}>
            {stats.monthlySales.map((value, index) => (
              <Box key={index} className={styles.bar}>
                <Box
                  className={styles.fill}
                  sx={{ height: `${value * 5}px`, backgroundColor: theme.palette.primary.main }}
                />
                <Typography variant="body2" className={styles.monthLabel}>
                  M{index + 1}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
