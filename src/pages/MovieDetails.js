import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../data/moviesData";
import { getMovieImg } from "../utils/getMovieImg";
import './MovieDetails.css'

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    get(`/movie/${movieId}`).then((data) => {
      setMovie(data);
      setGenres(data.genres[0]);
    });
  }, [movieId]);

  const imgURL = getMovieImg(movie.poster_path, 500);
  return (
    <div className="detailsContainer">
      <img src={imgURL} alt={movie.title} className="col movieImage" />
      <div className="col movieDetails">
        <p className="title">
          <strong>Title: </strong>
          {movie.title}
        </p>
        <p className="">
          <strong>Genero: </strong>
          {genres.name}
        </p>
        <p className="">
          <strong>Descriptión: </strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
