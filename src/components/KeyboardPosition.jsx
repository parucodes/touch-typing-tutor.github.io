import React from "react";
import { Box, Grid, Paper } from "@mui/material";

const keyboardLayout = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm']
];

const KeyboardPosition = ({ word, typedWord }) => {
  const nextLetter = typedWord.length >= word.length ? " " : word[typedWord.length];

  return (
    <Box sx={{ mt: 2 }}>
      <Grid container spacing={1} justifyContent="center">
        {keyboardLayout.map((row, rowIndex) => (
          <Grid container item key={rowIndex} spacing={1} justifyContent="center">
            {row.map((letter, letterIndex) => (
              <Grid item key={letterIndex}>
                <Paper 
                  elevation={3} 
                  sx={{ 
                    width: { xs: 20, sm: 30, md: 40 }, 
                    height: { xs: 20, sm: 30, md: 40 }, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    bgcolor: nextLetter === letter ? 'yellow' : 'white'
                  }}
                >
                  {letter.toUpperCase()}
                </Paper>
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default KeyboardPosition;
