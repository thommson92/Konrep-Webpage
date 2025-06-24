import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import SavingsIcon from '@mui/icons-material/Savings';
import styles from './SavingsPlanPage.module.css';

const savingsPlans = [
  {
    title: 'Plan A',
    description: 'Kurzbeschreibung für Plan A.',
    icon: <SavingsIcon />,
    dateRange: '01.01.2024 - 31.12.2024',
    availability: 'Noch 10 verfügbar',
  },
  {
    title: 'Plan B',
    description: 'Kurzbeschreibung für Plan B.',
    icon: <SavingsIcon />,
    dateRange: '01.03.2024 - 30.06.2024',
    availability: 'Noch 5 verfügbar',
  },
  {
    title: 'Plan C',
    description: 'Kurzbeschreibung für Plan C.',
    icon: <SavingsIcon />,
    dateRange: '01.07.2024 - 31.12.2024',
    availability: 'Noch 8 verfügbar',
  },
];

const SavingsPlanPage = () => {
  return (
    <Box className={styles.container}>
      {savingsPlans.map((plan, index) => (
        <Card className={styles.card} key={index}>
          <CardContent className={styles.cardContent}>
            <Box className={styles.cardHeader}>
              {plan.icon}
              <Typography variant="h6" className={styles.cardTitle}>
                {plan.title}
              </Typography>
            </Box>
            <Typography variant="body2" className={styles.cardDescription}>
              {plan.description}
            </Typography>
            <Typography variant="caption" className={styles.cardCaption}>
              Zeitraum: {plan.dateRange}
            </Typography>
            <Typography variant="caption" className={styles.cardCaption}>
              Verfügbarkeit: {plan.availability}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default SavingsPlanPage;