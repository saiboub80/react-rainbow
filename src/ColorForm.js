import React, { useState } from 'react';

const ColorForm = (props) => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the input value, e.g. submit to a server
    console.log('Input:', input);
    props.addColor(input)
    setInput(''); // Reset the input value to a blank string

  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter a color"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ColorForm;
