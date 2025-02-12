import { useParams, useNavigate } from "react-router-dom";
import "./MoviesDetails.css";

const movies = [
  { id: 1, title: "Chhaava", description: "An epic saga of a courageous warrior!", image: "https://i.pinimg.com/736x/a1/9c/6c/a19c6c3bc51986feca924c2d1c52f706.jpg" },
  { id: 2, title: "Bhool Bhulaiyaa 3", description: "A horror-comedy masterpiece.", image: "https://i.pinimg.com/736x/03/cc/fe/03ccfeed321bca83ef1ad7bdd7fe6364.jpg" },
];

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <h2 className="not-found">Movie Not Found</h2>;

  return (
    <div className="movie-details-container">
      <div className="movie-card">
        <img src={movie.image} alt={movie.title} className="movie-image" />
        <h2 className="movie-title">{movie.title}</h2>
        <p className="movie-description">{movie.description}</p>
        <button className="book-button" onClick={() => navigate(`/book/${movie.id}`)}>
          Book Seat
        </button>
      </div>
    </div>
  );
}
