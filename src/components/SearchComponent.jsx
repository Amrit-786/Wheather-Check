import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './WeatherDashboard.css'

function SearchComponent({ setCity }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setCity(searchTerm.trim());
      setSearchTerm('');
    }
  };

  return (
    <form className="search-component" onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter city name"
        className="search-input"
      />
      <button type="submit" className="search-button">
        <FaSearch />
      </button>
    </form>
  );
}

export default SearchComponent;