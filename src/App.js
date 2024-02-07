import './App.css';
import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  // Function to add three spaces between each letter in each word
 function space() {
  const text = inputText.split('');
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ' || text[i] === '\u0020') {
      text[i] = text[i] + ' ';
    } else {
      text[i] = text[i] + ' ';
    }
  }
    setOutputText(text.join(''));
  }

  return (
    <pre>
      <nav className="app-header">
          <h1 className="app-title">S P Æ C E</h1>
      </nav>

      <div className="app-container">
        <div className="app-content">
          <label className="app-label">
            <input type="text" className="app-input" value={inputText} placeholder="e n t e r   t e x t   h e r e" onChange={(e) => setInputText(e.target.value)} />
          </label>
          <button className="app-button" onClick={space}>
            M a n i p u l a t e   T e x t
          </button>
          <div className="app-output">
            <pre className="app-output-title">O u t p u t   T e x t:</pre>
            <pre className="app-output-text">{outputText}</pre>
          </div>
        </div>
      </div>
    </pre>
  );
}

export default App;
