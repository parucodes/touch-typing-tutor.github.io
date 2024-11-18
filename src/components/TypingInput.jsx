import React from "react";
import { TextField, Box } from "@mui/material";
import '../styles/TypingInput.css';

const TypingInput = ({ typedWord, correctWord, onInputChange, disabled, inputRef }) => {
  const highlightText = () => {
    let highlighted = "";
    for (let i = 0; i < correctWord.length; i++) {
      if (typedWord[i] === correctWord[i]) {
        highlighted += `<span class="correct">${typedWord[i]}</span>`;
      } else {
        highlighted += `<span class="incorrect">${typedWord[i] || ""}</span>`;
      }
    }
    return { __html: highlighted };
  };

  return (
    <Box>
      <TextField
        value={typedWord}
        onChange={(e) => onInputChange(e.target.value)}
        disabled={disabled}
        inputRef={inputRef}
        fullWidth
        variant="outlined"
        label="Type here and press space"
        margin="normal"
      />
      <Box className="highlighted-text" dangerouslySetInnerHTML={highlightText()}></Box>
    </Box>
  );
};

export default TypingInput;
