import './App.css';
import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  // Function to add three spaces between each letter in each word
  function space() {
    const text = inputText.split('');
    for (let i = 0; i < text.length; i++) {
      if (text[i] === ' ') {
        text[i] = '   ';
      }
    }
    setOutputText(text.join(''));
  }
  
  return (
    <div className="app-container">
      {/* Div for the header of the application */}
      <div className="app-header">
        <h1 className="app-title">S P Æ C E</h1>
      </div>

      <div className="app-content">
        <label className="app-label">
          <input type="text" className="app-input" value={inputText} placeholder="e n t e r   t e x t   h e r e" onChange={(e) => setInputText(e.target.value)} />
        </label>
        <button className="app-button" onClick={space}>
          Manipulate Text
        </button>
        <div className="app-output">
          <strong className="app-output-title">Output Text:</strong>
          <div className="app-output-text">{outputText}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
