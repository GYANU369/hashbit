import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./BookingForm.css";

export default function BookingForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("bookingData", JSON.stringify(formData));
    navigate("/confirmation");
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h2 className="form-title">Book Seat for Movie {id}</h2>
      <input
        type="text"
        placeholder="Name"
        required
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="form-input"
      />
      <input
        type="email"
        placeholder="Email"
        required
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="form-input"
      />
      <input
        type="tel"
        placeholder="Mobile"
        required
        value={formData.mobile}
        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
        className="form-input"
      />
      <button type="submit" className="confirm-button">Confirm Booking</button>
    </form>
  );
}