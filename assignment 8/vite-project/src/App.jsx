import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviesList from "./pages/MoviesList";
import MovieDetails from "./pages/MovieDetails";
import BookingForm from "./pages/BookingForm";
import BookingConfirmation from "./pages/BookingConfirmation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/book/:id" element={<BookingForm />} />
        <Route path="/confirmation" element={<BookingConfirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
