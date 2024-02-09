import React, { useState } from 'react';


function AddMovies(props) {
  const movieState = {
    title: "",
    watched : false
  }
  //set up state for user input
  const [add, setAdd] = useState(movieState);
  //event handler for user input to set state of input
  const handleInput = (event) => {
    setAdd(event.target.value);
  }
  //event handler for submit button
  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleAddInput(add);
    setAdd("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="query"
        placeholder="Add movie title here"
        type="text"
        value={add.title}
        onChange={handleInput}
      />
      <button type="submit"><strong>Add</strong></button>
    </form>
  );
}

export default AddMovies;
