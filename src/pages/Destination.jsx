import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/destination/destination.css";

const Destination = () => {
  const [items, setItems] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const storedItems =
      JSON.parse(localStorage.getItem("travelDestination")) || [];

    if (storedItems.length === 0) {
      const dummyData = [
        {
          id: 1,
          name: "Labuan Bajo",
          date: "2023-12-15",
          price: 350,
          image: "labuan-bajo.png",
          description: "A beautiful destination with stunning views.",
        },
        {
          id: 2,
          name: "Bali",
          date: "2024-01-10",
          price: 450,
          image: "bali.png",
          description: "A tropical paradise with beaches and culture.",
        },
        {
          id: 3,
          name: "Lombok",
          date: "2024-02-05",
          price: 400,
          image: "lombok.png",
          description: "Explore the natural beauty and serenity of Lombok.",
        },
        {
          id: 4,
          name: "Belitung",
          date: "2024-03-20",
          price: 300,
          image: "belitung.png",
          description: "Famous for its crystal-clear waters and islands.",
        },
      ];
      localStorage.setItem("travelDestination", JSON.stringify(dummyData));
      setItems(dummyData);
    } else {
      setItems(storedItems);
    }

    const storedBookings =
      JSON.parse(localStorage.getItem("ticketBookings")) || [];

    setItems(storedItems);
    setBookings(storedBookings);
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBookTicket = (destination) => {
    setSelectedDestination(destination);
    setShowModal(true);
  };

  const handleSubmitBooking = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    const currentDate = new Date().toISOString().split("T")[0];

    const newBooking = {
      id: Date.now(),
      destination: selectedDestination.name,
      date: currentDate,
      ...formData,
    };

    const updatedBookings = [...bookings, newBooking];
    setBookings(updatedBookings);
    localStorage.setItem("ticketBookings", JSON.stringify(updatedBookings));
    setShowModal(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
    });

    alert("Booked!");
  };

  return (
    <>
      <div className="banner">
        <Navbar />
        <div className="info-title">
          <h1>/Destination</h1>
        </div>
      </div>
      <div className="container">
        <h2 style={{ marginTop: "2rem" }}>Destinations</h2>
        <div className="destination-list">
          {items.length > 0 ? (
            items.map((item) => (
              <div key={item.id} className="destination-item">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="destination-image"
                    style={{ width: "200px", height: "auto" }}
                  />
                )}
                <h2>{item.name}</h2>
                <p className="destination-date">Date: {item.date}</p>
                <p className="destination-price">Price: ${item.price}</p>
                <p className="destination-description">
                  Description: {item.description}
                </p>
                <button
                  onClick={() => handleBookTicket(item)}
                  className="book-button"
                >
                  Book Ticket
                </button>
              </div>
            ))
          ) : (
            <p>No destinations available.</p>
          )}
        </div>

        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Book Ticket for {selectedDestination.name}</h2>
              <form>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                />
                <button
                  type="button"
                  onClick={handleSubmitBooking}
                  className="book-now-button"
                >
                  Book Now
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="close-button"
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Destination;
