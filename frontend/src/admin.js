import React, { useState } from 'react';

function Admin() {

  const [keyInput, setKeyInput] = useState('');
  const [valueInput, setValueInput] = useState('');

  const handleKeyChange = event => {
    setKeyInput(event.target.value);
  };

  const handleValueChange = event => {
    setValueInput(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const apiURL = 'http://localhost:2000/api/ciphers/create';
    await fetch(apiURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        cipherKey: keyInput,
        cipherValue: valueInput
      })
    });
    setKeyInput('');
    setValueInput('');
  };

  return (
    <div className="Admin">
      <form className="form" action="" onSubmit={handleSubmit}>
        <input type="text" size="30" placeholder="key" value={keyInput} onChange={handleKeyChange} />
        <input type="text" size="30" placeholder="value" value={valueInput} onChange={handleValueChange} />
        <input type="submit" />
      </form>
     </div>
  );
}

export default Admin;