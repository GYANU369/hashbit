import { useEffect, useState } from "react";
import "./BookingConfirmation.css";

export default function BookingConfirmation() {
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookingData"));
    setBookingData(data);
  }, []);

  return (
    <div className="confirmation-container">
      {bookingData ? (
        <>
          <h2 className="confirmation-title">Booking Confirmed!</h2>
          <p className="confirmation-message">Thank you, {bookingData.name}. Your booking details are:</p>
          <p className="booking-detail">Email: {bookingData.email}</p>
          <p className="booking-detail">Mobile: {bookingData.mobile}</p>
        </>
      ) : (
        <h2 className="no-data-message">No booking data found!</h2>
      )}
    </div>
  );
}
