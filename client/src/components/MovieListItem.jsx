import React, { useState } from 'react';

function MovieListItem(props) {
  const handleCheck = (event) => {

  }
  if(props.movie.title === 'no movie by that name found') {
    return (<ul>{props.movie.title}</ul>)
  }
  return (
    <ul>
    {props.movie.title}
      <input onClick={handleCheck} type="checkbox" id="my-toggle"/>
      <label><strong>Watched</strong></label>
    </ul>

  );
}

export default MovieListItem;