import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import '../styles/FingerDisplay.css';

const fingerMap = {
  'q': 'Left Little', 'w': 'Left Ring', 'e': 'Left Middle', 'r': 'Left Index', 't': 'Left Index',
  'a': 'Left Little', 's': 'Left Ring', 'd': 'Left Middle', 'f': 'Left Index', 'g': 'Left Index',
  'z': 'Left Little', 'x': 'Left Ring', 'c': 'Left Middle', 'v': 'Left Index', 'b': 'Left Index',
  'y': 'Right Index', 'u': 'Right Index', 'i': 'Right Middle', 'o': 'Right Ring', 'p': 'Right Little',
  'h': 'Right Index', 'j': 'Right Index', 'k': 'Right Middle', 'l': 'Right Ring',
  'n': 'Right Index', 'm': 'Right Middle'
};

const fingers = ['Left Little', 'Left Ring', 'Left Middle', 'Left Index', 'Left Thumb', 'Right Thumb', 'Right Index', 'Right Middle', 'Right Ring', 'Right Little'];

const FingerDisplay = ({ word, typedWord }) => {
  const nextLetter = typedWord.length >= word.length ? " " : word[typedWord.length];
  const highlightFinger = nextLetter === " " ? 'Right Thumb' : fingerMap[nextLetter];

  return (
    <Box sx={{ mt: 2 }}>
      <Grid container spacing={1} justifyContent="center" sx={{ flexWrap: 'nowrap' }}>
        {fingers.map(finger => (
          <Grid item key={finger} sx={{ flexShrink: 1 }}>
            <Paper 
              elevation={3} 
              sx={{ 
                width: 50, 
                height: 50, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                bgcolor: highlightFinger === finger ? 'yellow' : 'white'
              }}
            >
              {finger}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FingerDisplay;
