import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/movie-list';
import MovieDetails from './components/movie-details';
import MovieForm from './components/movie-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useCookies}  from 'react-cookie';
import { useFetch } from './hooks/useFetch';

function App() {

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [editedMovie, setEditedMovie] = useState(null);
  const [access_token, setToken, deleteToken] = useCookies(['access_token']);
  const [data, loading, error] = useFetch();



  useEffect( () => {
    //setToken(token['mr-token'])
    console.log(access_token);
    if(!access_token['access_token']) window.location.href = '/';
  }, [access_token])

  useEffect(() => {
    //console.log(data);
    setMovies(data);
  }, [data])

  //const movieClicked = movie => {
  //  //console.log(movie.title)
  //  setSelectedMovie(movie);
  //}

  const loadMovie = movie => {
    setSelectedMovie(movie);
    setEditedMovie(null);
  }
  const editClicked = movie => {
    setEditedMovie(movie);
    setSelectedMovie(null);
  }
  const updatedMovie = movie => {
    const newMovies = movies.map( mov => {
      if (mov.id === movie.id) {
        return movie;
      }
      return mov;
    })
    setMovies(newMovies)
  }
  const newMovie = () => {
    setEditedMovie({title: '', description: ''});
    setSelectedMovie(null);
  }
  const movieCreated = movie => {
    const newMovies = [...movies, movie];
    setMovies(newMovies);
  }
  const removeClicked = movie => {
    const newMovies = movies.filter(mov => mov.id !== movie.id);
    setMovies(newMovies);
  }
  const logoutUser = () => {
    deleteToken(['access_token']);
  }

  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Error loading movies</h1>
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <FontAwesomeIcon icon={faFilm}/>
          <span>Mover rater</span>
        </h1>
        <FontAwesomeIcon icon={faSignOutAlt} onClick={logoutUser}/>
      </header>
      <div className="layout">
        <div>
          <MovieList 
            movies={movies} 
            movieClicked={loadMovie} 
            editClicked={editClicked}
            removeClicked={removeClicked}
          />
          <button onClick={newMovie}>New movie</button>
        </div>
        <MovieDetails movie={selectedMovie} updateMovie={loadMovie}/>
        { !editedMovie ? 
        <MovieForm movie={editedMovie} updatedMovie={updatedMovie} movieCreated={movieCreated}/> 
        : null}
      </div>
    </div>
  );
}

export default App;
