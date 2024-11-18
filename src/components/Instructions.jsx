import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Instructions = ({ closeInstructions }) => {
  return (
    <Card sx={{ maxWidth: 400, mx: 'auto', mt: 1, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="body1">
          <ol>
            <li><strong>Left Hand Placement:</strong> Place your left-hand fingers on the keys A, S, D, F. Little finger rests on A.</li>
            <li><strong>Right Hand Placement:</strong> Place your right-hand fingers on the keys J, K, L, ;. Little finger rests on ;.</li>
            <li><strong>Resting Position:</strong> After typing any key, return your fingers to their original positions.</li>
            <li><strong>Guidance on Screen:</strong> Look at the screen to see which finger to use next. Finger name and key position will be highlighted.</li>
          </ol>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Instructions;
