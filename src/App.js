import logo from './logo.svg';
import './App.css';
import React from 'react';

// Functio to add a space between each letter in each word

function App() {
  return (
    <div className="App">

      {/* Div for the header of the application */}
      <div className="App-header">
        <h1 className="font-face-psBlack">S P Æ C E</h1>
      </div>
      
      {/* Div for h input field were the text woudl go throuh  */}
      <div className='textField'>
        <input clasName = 'inputField' type='text' placeholder='W r i t e   t e x t   h e r e'></input>

        {/* Insert for button */}
        <button className='button'>s u b m i t</button>
      </div>

    </div>
  );
}

export default App;
