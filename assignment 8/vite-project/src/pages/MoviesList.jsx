
import { Link } from "react-router-dom";
import "./MoviesList.css";

const movies = [
  { id: 1, title: "Chhaava", image: "https://i.pinimg.com/736x/a1/9c/6c/a19c6c3bc51986feca924c2d1c52f706.jpg" },
  { id: 2, title: "Bhool Bhulaiyaa 3", image: "https://i.pinimg.com/736x/03/cc/fe/03ccfeed321bca83ef1ad7bdd7fe6364.jpg" },
  { id: 3, title: "Lucky Baskhar", image: "https://i.pinimg.com/736x/99/d7/c7/99d7c7144c0afa3b9c47cabfc2514c1d.jpg" },
  { id: 4, title: "Game Changer", image: "https://i.pinimg.com/736x/be/45/1b/be451b0af8583c63a72494d80034ba38.jpg" },
  { id: 5, title: "Stree 2", image: "https://i.pinimg.com/736x/7c/ad/45/7cad45919e7262e35ff639885f26f4c6.jpg" },
  { id: 6, title: "RRR", image: "https://i.pinimg.com/736x/95/06/4a/95064a85c1739cf95d490228438e6197.jpg" },
];

export default function MoviesList() {
  return (
    <div className="movies-grid">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img src={movie.image} alt={movie.title} />
          <h3>{movie.title}</h3>
          <Link to={`/movie/${movie.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}