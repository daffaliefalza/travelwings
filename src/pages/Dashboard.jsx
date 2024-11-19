import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard/dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [newItem, setNewItem] = useState({
    name: "",
    date: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      navigate("/login");
    } else {
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
    const confirmed = window.confirm(
      "Are you sure you want to delete this destination?"
    );
    if (confirmed) {
      const updatedItems = items.filter((item) => item.id !== id);
      setItems(updatedItems);
      localStorage.setItem("travelDestination", JSON.stringify(updatedItems));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  // Filter items based on the search query
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

      <section className="search-destination">
        <h2>Search Destination</h2>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by destination name"
          className="search-input"
        />
      </section>

      <section className="destination-wrapper">
        <h2>Destinations</h2>
        <div className="destination-cards">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
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
            ))
          ) : (
            <p>No destinations found.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
