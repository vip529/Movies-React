import React, { useState } from "react";

/*
*Component to render a particular movie item
* liked - a state to store whether liked or not.
* watchlisted - a state to store whether watchlisted or not.
* @props: item - store  amovie object 
          id(number) - store id of a particular movie object
          onDelete - a parent function to delete items.
*/
const Movie = (props) => {
  
  const [liked, setLike] = useState(false);
  const [watchlisted,setWatchlist] = useState(false);
  const movie = props.item;
  const onDelete = props.onDelete;
  const id = props.id;

  /*handles watchlist button click*/ 
  const handleWatchlistCLick = () => {
    const watchState = !watchlisted;
    setWatchlist(watchState);
  };

  /*handles like button click*/ 
  const handleLikeCLick = () => {
    const likeState = !liked;
    setLike(likeState);
  };

  return (
    <div className="movieContainer">
        <div>
          <h2>{movie.title}</h2>
        </div>
        <div>
        {liked && 
            <svg className="heart" viewBox="0 0 32 29.6">
                <path
                  d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
                    c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
                />
          </svg>
        }
        </div>
        <div>
          <h4>Rotten Tomatoes : </h4>
          <span>{movie.rating}</span>
        </div>
        
        <div>
          <h4>Actors : </h4>
          <span>{movie.actors.join(" , ")}</span>
        </div>
        <div>
          <button onClick={handleLikeCLick}>Like</button>
          <button style={ watchlisted ? { color:'white', backgroundColor: 'red'} : {}} onClick={handleWatchlistCLick}>
          {watchlisted ? "Watchlisted" : "Watchlist"}
          </button>
          <button onClick = {()=> onDelete(id)}>Delete</button>
        </div>
        
    </div>
  );
};

export default Movie;
