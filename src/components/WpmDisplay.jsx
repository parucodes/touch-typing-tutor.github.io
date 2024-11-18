import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const WpmDisplay = ({ wpm }) => {
  return (
    <Card sx={{ maxWidth: 400, mx: 'auto', mt: 1, boxShadow: 0, border: 'none', backgroundColor: '#e0f7fa' }}>
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 0 }}>
        <Typography variant="h5" sx={{ fontSize: '1.75rem' }}>
          Speed:
        </Typography>
        <Typography variant="h3" color="primary" sx={{ fontSize: '2rem' }}>
          {Math.floor(wpm)}
        </Typography>
        <Typography variant="h5" sx={{ fontSize: '1.25rem' }}>
          words per minute
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WpmDisplay;
