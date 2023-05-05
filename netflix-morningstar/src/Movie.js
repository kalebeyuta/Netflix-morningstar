import axios from './axios';
import React, { useEffect, useState } from 'react';
import "./css/Movie.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Movie({ movie }) {
  const [trailerUrl, setTrailerUrl] = useState("");
  
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=82551f4d1b6f85de2b7be0f27ff24c2b`);
      setTrailerUrl(request.data.results[0]?.key);
      return request;
    }
    fetchData();
  }, [movie.id]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    }
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      })
      .catch((error) => console.log(error));
    }
  }

  return (
    <div className="movie">
      <img
        src={`${base_url}${movie.poster_path}`}
        alt={movie.name}
        onClick={() => handleClick(movie)}
      />
      <div className="movie-info">
        <h3>{movie.name || movie.title || movie.original_name}</h3>
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Movie;
