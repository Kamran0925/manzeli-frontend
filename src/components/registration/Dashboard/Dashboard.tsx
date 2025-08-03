import React from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import Header from '../../shared/Header/Header';
import CountUp from 'react-countup';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import styles from './Dashboard.module.css';

const stats = {
  totalListings: 120,
  sold: 80,
  available: 40,
  totalRevenue: 1250000,
  monthlySales: [5, 12, 8, 15, 10, 20, 17, 13, 18, 9, 14, 22],
};

const propertyTypeData = [
  { name: 'Apartments', value: 400 },
  { name: 'Villas', value: 300 },
  { name: 'Plots', value: 300 },
  { name: 'Commercial', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Dashboard: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Header />
      <br />
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
              { label: 'Total Revenue AED', value: stats.totalRevenue },
            ].map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box className={styles.statCard}>
                  <Typography variant="h4">{stat.label}</Typography>
                  <Typography variant="h3">
                    <CountUp end={Number(stat.value)} duration={1.5} separator="," />
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <br />
        {/* Monthly Sales */}
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

        {/* Property Types Pie Chart */}
        <Box className={styles.chartWrapper}>
          <Typography variant="h4" className={styles.chartTitle}>
            Property Types Distribution
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={propertyTypeData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {propertyTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Box>
        {/* Recent Listings */}
        <Box className={styles.recentListings}>
          <Typography variant="h4" className={styles.chartTitle}>
            Recent Listings
          </Typography>
          <br />
          <Grid container spacing={2}>
            {[1, 2, 3].map(id => (
              <Grid item xs={12} sm={6} md={4} key={id}>
                <Box className={styles.statCard}>
                  <Typography variant="body1">Listing #{id}</Typography>
                  <Typography variant="body2">Location: Marina Mall {id}, UAE</Typography>
                  <Typography variant="body2">Price: AED {id * 1500000}/-</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
