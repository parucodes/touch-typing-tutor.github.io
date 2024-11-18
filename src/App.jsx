import React, { useState, useEffect } from "react";
import WordDisplay from "./WordDisplay";
import TypingInput from "./TypingInput";
import Timer from "./Timer";
import WpmDisplay from "./WpmDisplay";
import FingerDisplay from "./FingerDisplay";
import words from "./words";

const App = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [typedWord, setTypedWord] = useState("");
  const [correctLetters, setCorrectLetters] = useState(0);
  const [totalWordsTyped, setTotalWordsTyped] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(60);

  useEffect(() => {
    setCurrentWord(words[Math.floor(Math.random() * words.length)]);
  }, []);

  useEffect(() => {
    if (timeRemaining > 0) {
      const timer = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [timeRemaining]);

  const handleInputChange = (input) => {
    setTypedWord(input);
    if (input === currentWord) {
      setTotalWordsTyped(totalWordsTyped + 1);
      setCorrectLetters(correctLetters + currentWord.length);
      setTypedWord("");
      setCurrentWord(words[Math.floor(Math.random() * words.length)]);
    }
  };

  const wpm = (correctLetters / 5) / ((60 - timeRemaining) / 60);

  return (
    <div>
      <Timer timeRemaining={timeRemaining} />
      <WordDisplay word={currentWord} />
      <FingerDisplay word={currentWord} />
      <TypingInput typedWord={typedWord} onInputChange={handleInputChange} />
      <WpmDisplay wpm={wpm.toFixed(2)} />
    </div>
  );
};

export default App;
