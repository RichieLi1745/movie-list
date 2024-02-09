import React, { useState } from 'react';
import Search from './Search.jsx';
import MovieList from './MovieList.jsx';
import AddMovies from './AddMovies.jsx';
import WatchAndToWatch from './WatchAndToWatch.jsx';


const App = () => {
  const listState = {}
  const [list, setList] = useState([]);
  //state to be filtered
  const [activeList, setActiveList] = useState([]);
  const search = (query) => {
    const results = activeList.filter(movie  => {
      return movie.title.toLowerCase().includes(query.toLowerCase());
    })
    if(results.length > 0) setActiveList(results);
    if(results.length === 0) setActiveList([{title:'no movie by that name found'}]);
    if(query === '') setActiveList(list);
  }
  const addMovie = (newMovie) => {
    console.log(newMovie);
    var newMovie = {title: newMovie, watched: false};
    setList([...list, newMovie]);
    setActiveList([...list, newMovie]);
  }
  const switchTab = () => {

  }
  return(
    <div>
    <h2>MovieList</h2>
      <WatchAndToWatch handleWatchAndToWatch={switchTab}/>
      <AddMovies handleAddInput={addMovie}/>
      <Search handleSearchInput={search}/>
      <MovieList movies={activeList === [] ? list: activeList}/>
    </div>
  )
};



export default App;