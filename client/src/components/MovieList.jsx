import MovieListItem from './MovieListItem.jsx';
import React from 'react';

const MovieList = (props) => {

    return(<ul>
      {props.movies.map((movie, index)=>(
        <MovieListItem key={index} movie={movie}/>
      ))}
      </ul>)

}
export default MovieList;