import React, { useState } from 'react';
import './home.scss';

function Home() {

  const [input, setInput] = useState('');
  const [cipher, setCipher] = useState('');

  const handleChange = event => {
    setInput(event.target.value);
  };

  const fetchData = async () => {
    const apiURL = 'http://localhost:2000/api/ciphers';
    const response = await fetch(apiURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        input: input
      })
    });
    const data = await response.text();
    setCipher(data);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    fetchData();
    setInput('');
  };

  return (
    <div className="Home">
      <header className="header">
        <img src="./uvod.jpg" alt="" />
        Schwa!
      </header>
      <div>{cipher}</div>
      <div>
        <form className="form" action="" onSubmit={handleSubmit}>
          <input type="text" size="30" value={input} onChange={handleChange} />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Home;
