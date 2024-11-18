import React from "react";
import { Typography } from "@mui/material";

const WordDisplay = ({ word }) => {
  return (
    <Typography variant="h3" gutterBottom>
      {word}
    </Typography>
  );
};

export default WordDisplay;
