import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";

export function MovieCard({ movie }) {
  const imgURL = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
  return (
    <li className="movieCard">
      <Link to={`/detail/${movie.id}`}>
        <img
          width={230}
          height={345}
          src={imgURL}
          alt={movie.title}
          className="movieImage"
        />
      </Link>

      <div>{movie.title}</div>
    </li>
  );
}
