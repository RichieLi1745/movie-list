import MovieListItem from './MovieListItem.jsx';
import React from 'react';
const MovieList = (props) => {
if (props.movies.length !== 0) {
  return(<ul>
    {props.movies.map((movie,index)=>(
      <MovieListItem key={index} movie={movie}/>
    ))}

    </ul>)
} else {
  return(<div>no movie by that name found</div>)
}
}

export default MovieList;