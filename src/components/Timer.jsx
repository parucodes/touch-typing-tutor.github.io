import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Timer = ({ timeRemaining }) => {
  return (
    <Card sx={{ maxWidth: 200, mx: 'auto', mt: 0.5, mb: 0.5, boxShadow: 0, border: 'none', backgroundColor: '#e0f7fa' }}>
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 16px' }}>
        <Typography variant="h6" sx={{ fontSize: '1.25rem' }}>
          Time:
        </Typography>
        <Typography variant="h4" color="primary" sx={{ fontSize: '1.5rem', ml: 1 }}>
          {timeRemaining}s
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Timer;
