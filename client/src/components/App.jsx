import React, { useState } from 'react';
import Search from './Search.jsx';
import MovieList from './MovieList.jsx';
import AddMovies from './AddMovies.jsx';

var Movies = [
  { title: 'Mean Girls' },
  { title: 'Hackers' },
  { title: 'The Grey' },
  { title: 'Sunshine' },
  { title: 'Ex Machina' },
];

const App = () => {
  const [list, setList] = useState([]);
  const search = (query) => {
    const results = Movies.filter(movie  => {
      if(query === "") {
        return Movies;
      } else {
        return movie.title.toLowerCase().includes(query.toLowerCase());
      }
    })

      setList(results);

  }
  const addMovie = () => {

  }
  return(
    <div>
    <h2>MovieList</h2>
      <AddMovies handleAddInput={addMovie}/>
      <Search handleSearchInput={search}/>
      <MovieList movies={list}/>
    </div>
  )
};



export default App;