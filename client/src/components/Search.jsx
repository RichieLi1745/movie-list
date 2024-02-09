import React, { useState } from 'react';


function Search(props) {
  //set up state for user input
  const[input, setInput] = useState("");
  //event handler for user input to set state of input
  const handleInput = (event) => {

    setInput(event.target.value);
  }
  //event handler for submit button
  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSearchInput(input);
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="query"
        placeholder="Search..."
        type="text"
        value={input}
        onChange={handleInput}
      />
      <button type="submit" >Search</button>
    </form>
  );
}

export default Search;
