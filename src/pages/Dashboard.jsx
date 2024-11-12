// Dashboard.jsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard/dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: "",
    date: "",
    price: "",
    image: "",
  });

  // Check if the user is logged in when the page loads
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      // If the user is not logged in, redirect to the login page
      navigate("/login");
    } else {
      // If the user is logged in, fetch the stored items
      const storedItems =
        JSON.parse(localStorage.getItem("travelDestination")) || [];
      setItems(storedItems);
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setNewItem((prev) => ({
        ...prev,
        image: reader.result,
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const addItem = () => {
    if (!newItem.name || !newItem.date || !newItem.price || !newItem.image) {
      alert("Please fill out all fields");
      return;
    }

    const updatedItems = [
      ...items,
      {
        id: Date.now(),
        name: newItem.name,
        date: newItem.date,
        price: newItem.price,
        image: newItem.image,
      },
    ];
    setItems(updatedItems);
    localStorage.setItem("travelDestination", JSON.stringify(updatedItems));
    setNewItem({ name: "", date: "", price: "", image: "" });
  };

  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem("travelDestination", JSON.stringify(updatedItems));
  };

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user from localStorage
    navigate("/login"); // Redirect to the login page
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Manage Destination</h1>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </header>

      <section className="add-destination">
        <h2>Add New Destination</h2>
        <div className="input-group">
          <input
            name="name"
            value={newItem.name}
            onChange={handleChange}
            placeholder="Destination Name"
          />
          <input
            type="date"
            name="date"
            value={newItem.date}
            onChange={handleChange}
            placeholder="Date"
          />
          <input
            name="price"
            value={newItem.price}
            onChange={handleChange}
            placeholder="Price"
          />
          <input type="file" onChange={handleImageChange} accept="image/*" />
        </div>
        <button onClick={addItem} className="add-button">
          Add Item
        </button>
      </section>

      <section className="destination-wrapper">
        <h2>Destinations</h2>
        <div className="destination-cards">
          {items.map((item) => (
            <div key={item.id} className="destination-card">
              <strong>{item.name}</strong>
              <p>Date: {item.date}</p>
              <p>Price: ${item.price}</p>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="destination-image"
                />
              )}
              <button
                onClick={() => removeItem(item.id)}
                className="delete-button"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
