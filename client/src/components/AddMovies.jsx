import React, { useState } from 'react';


function AddMovies(props) {
  //set up state for user input
  const [add, setAdd] = useState("");
  //event handler for user input to set state of input
  const handleInput = (event) => {
    setAdd(event.target.value);
  }
  //event handler for submit button
  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleAddInput(add);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="query"
        placeholder="Add movie title here"
        type="text"
        value={add}
        onChange={handleInput}
      />
      <button type="submit"><strong>Add</strong></button>
    </form>
  );
}

export default AddMovies;
