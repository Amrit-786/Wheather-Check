import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar, FaTrash } from 'react-icons/fa';
import './WeatherDashboard';

function FavoriteComponent({ favorites, setFavorites, setCity, currentCity }) {
  const [newFavorite, setNewFavorite] = useState('');

  const API_BASE_URL = 'https://mock-api-86pr.onrender.com';

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/favorites`);
      setFavorites(response.data);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };

  const addFavorite = async (e) => {
    e.preventDefault();
    const cityToAdd = newFavorite.trim() || currentCity;
    if (cityToAdd && !favorites.some(fav => fav.city.toLowerCase() === cityToAdd.toLowerCase())) {
      try {
        await axios.post(`${API_BASE_URL}/favorites`, { city: cityToAdd });
        fetchFavorites();
        setNewFavorite('');
      } catch (error) {
        console.error('Error adding favorite:', error);
      }
    }
  };

  const removeFavorite = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/favorites/${id}`);
      fetchFavorites();
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  };

  return (
    <div className="favorite-component">
      <h3>Favorite Cities</h3>
      <form onSubmit={addFavorite} className="add-favorite-form">
        <input
          type="text"
          value={newFavorite}
          onChange={(e) => setNewFavorite(e.target.value)}
          placeholder="Enter city name"
          className="favorite-input"
        />
        <button type="submit" className="add-favorite">
          <FaStar /> Add to Favorites
        </button>
      </form>
      <ul className="favorite-list">
        {favorites.map((fav) => (
          <li key={fav.id} className="favorite-item">
            <span onClick={() => setCity(fav.city)}>{fav.city}</span>
            <button onClick={() => removeFavorite(fav.id)} className="remove-favorite">
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteComponent;
