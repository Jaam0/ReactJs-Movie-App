import placeholder from "../img/palomitas-de-maiz.png";

export function getMovieImg(path, width) {
  return path ? `https://image.tmdb.org/t/p/w${width}${path}` : placeholder;
}
