// Destination.jsx

import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/destination/destination.css";

const Destination = () => {
  const [items, setItems] = useState([]);

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
        },
        {
          id: 2,
          name: "Bali",
          date: "2024-01-10",
          price: 450,
          image: "bali.png",
        },
        {
          id: 3,
          name: "Lombok",
          date: "2024-02-05",
          price: 400,
          image: "lombok.png",
        },
        {
          id: 4,
          name: "Belitung",
          date: "2024-03-20",
          price: 300,
          image: "belitung.png",
        },
      ];
      localStorage.setItem("travelDestination", JSON.stringify(dummyData));
      setItems(dummyData);
    } else {
      setItems(storedItems);
    }
  }, []);

  return (
    <>
      <div className="banner">
        <Navbar />
        <div className="info-title">
          <h1>/Destination</h1>
        </div>
      </div>
      <div className="container">
        <div className="destination-list">
          {items.length > 0 ? (
            items.map((item) => (
              <div key={item.id} className="destination-item">
                <h2>{item.name}</h2>
                <p className="destination-date">Date: {item.date}</p>
                <p className="destination-price">Price: ${item.price}</p>
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="destination-image"
                    style={{ width: "200px", height: "auto" }}
                  />
                )}
              </div>
            ))
          ) : (
            <p className="no-destinations">No destinations available</p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Destination;
