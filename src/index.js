import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import "./styles/WordDisplay.css";
import "./styles/TypingInput.css";
import "./styles/FingerDisplay.css";
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);

