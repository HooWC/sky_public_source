// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSearchClick = () => {
        if (city.trim()) {
            onSearch(city);
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                className="search-input"
                placeholder="请输入城市名称"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button className="search-button" onClick={handleSearchClick}>
                搜索
            </button>
        </div>
    );
};

export default SearchBar;
