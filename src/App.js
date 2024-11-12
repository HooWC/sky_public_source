import React, { useState } from 'react';
import './App.css';
import { fetchWeather } from './api';
import SearchBar from './components/SearchBar';
import Weather from './components/Weather';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = 'YOUR KEY API';  // 替换成你的 API 密钥

  const handleSearch = async (city) => {
    try {
      const data = await fetchWeather(city, apiKey);
      setWeatherData(data);
      setError(null);
    } catch (err) {
      setError("无法获取天气数据，请检查城市名称。");
      setWeatherData(null);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">天气预报</h1>
        <SearchBar onSearch={handleSearch} />
        {error && <p className="error-message">{error}</p>}
        <Weather weatherData={weatherData} />
      </div>
    </div>
  );
};

export default App;
