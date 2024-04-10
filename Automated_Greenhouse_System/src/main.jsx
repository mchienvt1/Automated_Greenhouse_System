import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from "@material-tailwind/react";
import AppProvider from './components/context/index.jsx'; // Import AppProvider from your context file

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AppProvider> {/* Wrap App with AppProvider */}
        <App />
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>,
);