import React, { useState } from 'react';
import Movie from './Movie';


/*
*Component to render MovieList
* movies - a state storing array of movies as objects.
*/
const MovieList = () => {
  const [movies,setMovies] = useState([
    {
      id: 1,
      title : "The Mule",
      rating : "70%",
      actors : ["Clint Eastwood","Alison Eastwood","Dianne Wiest","Bradley Cooper","Taissa Farmiga"],
    },
    {
      id : 1,
      title : "Knives Out",
      rating : "97%",
      actors : ["Ana de Armas","Daniel Craig","Chris Evans","Joseph Gordon-Levitt","Jamie Lee Curtis"],
    },
    {
      id: 3,
      title : "Murder on the Orient Express",
      rating : "61%",
      actors : ["Kenneth Branagh","Johnny Depp","Daisy Ridley","Michelle Pfeiffer","Judi Dench"],
    },
    {
      id:4,
      title : "Tenet",
      rating : "71%",
      actors : ["Robert Pattinson","Elizabeth Debicki","John David Washington","Kenneth Branagh","Clémence Poésy"],
    },
    {
      id : 5,
      title : "The Magnificent Seven",
      rating : "644%",
      actors : ["Denzel Washington","Chris Pratt","Ethan Hawke","Vincent D'Onofrio","Lee Byung‑hun"],
    },
    {
      id: 6,
      title : "Now You See Me 2",
      rating : "33%",
      actors : ["Dave Franco","Jesse Eisenberg","Lizzy Caplan","Woody Harrelson","Daniel Radcliffe"],
    }

  ])


  /*
  *function to delete a movie item
  * @params {number} id - id of the movie.
  */
  const onDelete = (id) =>{
    console.log(id);
    const updatedMovieList  = movies.filter((movie)=> movie.id !== id);
    setMovies(updatedMovieList);
    console.log(movies);
  }
  


  return (
    <div>
        {
          movies.map((movie,index)=>
        <div key={"movie"+ index}>
          <Movie item = {movie} id = {movie.id} onDelete = {onDelete}/>
        </div>
        )}
    </div>
  )
}

export default MovieList;