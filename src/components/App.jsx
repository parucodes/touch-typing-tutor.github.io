import React, { useState, useEffect, useRef } from "react";
import { Container, Button, Typography, Box, Grid, Link, Card, CardContent, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import WordDisplay from "./WordDisplay";
import TypingInput from "./TypingInput";
import Timer from "./Timer";
import WpmDisplay from "./WpmDisplay";
import FingerDisplay from "./FingerDisplay";
import KeyboardPosition from "./KeyboardPosition";
import AdSense from "./AdSense";
import words from "./words";
import Instructions from "./Instructions";

const App = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [typedWord, setTypedWord] = useState("");
  const [correctLetters, setCorrectLetters] = useState(0);
  const [totalWordsTyped, setTotalWordsTyped] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [isActive, setIsActive] = useState(false);
  const [inputEnabled, setInputEnabled] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    setNewWord();
  }, []);

  useEffect(() => {
    if (isActive && timeRemaining > 0) {
      const timer = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isActive, timeRemaining]);

  useEffect(() => {
    const handleSpaceKey = (e) => {
      if (e.key === " " && !inputEnabled) {
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handleSpaceKey);
    return () => {
      window.removeEventListener("keydown", handleSpaceKey);
    };
  }, [inputEnabled]);

  const setNewWord = () => {
    setCurrentWord(words[Math.floor(Math.random() * words.length)]);
    setTypedWord("");
  };

  const handleInputChange = (input) => {
    setTypedWord(input);
    if (input === `${currentWord} `) {  // Expecting a space after the word
      setTotalWordsTyped(totalWordsTyped + 1);
      setCorrectLetters(correctLetters + currentWord.length);
      setNewWord();
      setTypedWord("");  // Clear the input field
    }
  };

  const handleRestart = () => {
    setNewWord();
    setCorrectLetters(0);
    setTotalWordsTyped(0);
    setTimeRemaining(60);
    setIsActive(true);
    setInputEnabled(true);  // Enable the input
    setTimeout(() => {
      inputRef.current.disabled = false; // Ensure input is enabled
      inputRef.current.focus(); // Focus the TypingInput field
    }, 0);
  };

  const handleShowInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  const wpm = (correctLetters / 5) / ((60 - timeRemaining) / 60);

  return (
    <Container maxWidth="lg" sx={{ textAlign: "center", height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant="h3" gutterBottom sx={{ background: 'linear-gradient(to right, #ff7e5f, #feb47b)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
        Touch Typing Tutor
      </Typography>
      <Button variant="contained" color="secondary" onClick={handleRestart} sx={{ my: 1, backgroundColor: '#ff4081' }}>
        Click to start typing
      </Button>
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center', width: '100%' }}>
        <Grid container rowSpacing={0} columnSpacing={0} justifyContent="center" alignItems="stretch" sx={{ height: '100%' }}>
          <Grid item xs={12} sm={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box id="left-ad-slot" sx={{ width: '100%', height: '100%' }}>
              <AdSense adClient="ca-pub-XXXXXXXXXXXXXXXX" adSlot="XXXXXXXXXXX" /> {/* Replace with your adClient and adSlot */}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#e0f7fa' }}>  {/* Light cyan background */}
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', mb: 1 }}>
              <Box sx={{ width: '75%', position: 'relative' }}>
                <Box sx={{ position: 'absolute', left: '67%', transform: 'translateX(-50%)' }}>
                  <WordDisplay word={currentWord} />
                </Box>
              </Box>
              <Box sx={{ width: '25%' }}>
                <Timer timeRemaining={timeRemaining} sx={{ height: '50px' }} />  {/* Reduced vertical size */}
                <Link component="button" variant="body2" onClick={handleShowInstructions} sx={{ mt: 1 }}>
                  Instructions
                </Link>
              </Box>
            </Box>
            {showInstructions && (
              <Card sx={{ mt: 2, width: '75%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6">Instructions</Typography>
                    <IconButton size="small" onClick={handleShowInstructions}>
                      <CloseIcon />
                    </IconButton>
                  </Box>
                  <Instructions />
                </CardContent>
              </Card>
            )}
            <FingerDisplay word={currentWord} typedWord={typedWord} />
            <KeyboardPosition word={currentWord} typedWord={typedWord} />
            <TypingInput
              typedWord={typedWord}
              correctWord={currentWord}
              onInputChange={handleInputChange}
              disabled={!inputEnabled || timeRemaining === 0}
              inputRef={inputRef}
            />
            <WpmDisplay wpm={wpm.toFixed(2)} backgroundColor="#e0f7fa" />  {/* Pass the background color */}
          </Grid>
          <Grid item xs={12} sm={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box id="right-ad-slot" sx={{ width: '100%', height: '100%' }}>
              <AdSense adClient="ca-pub-XXXXXXXXXXXXXXXX" adSlot="XXXXXXXXXXX" /> {/* Replace with your adClient and adSlot */}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default App;
