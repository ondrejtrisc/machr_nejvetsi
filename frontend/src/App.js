import React, { useState } from 'react';
import './App.scss';

function App() {

  const [input, setInput] = useState('');

  const handleChange = event => {
    setInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setInput('');
  };

  return (
    <div className="App">
      <header className="header">
        <img src="./uvod.jpg" />
        Schwa!
      </header>
      <div>
        <form className="form" action="" onSubmit={handleSubmit}>
          <input type="text" size="30" value={input} onChange={handleChange} />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
