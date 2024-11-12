// Weather.js
import React from 'react';

const Weather = ({ weatherData }) => {
    if (!weatherData) return null;

    const { name, main, wind, clouds, weather, sys } = weatherData;
    const { temp, temp_min, temp_max, pressure } = main;
    const { speed, deg } = wind;
    const { description, icon } = weather[0];
    const { sunrise, sunset } = sys;

    const formatTime = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleTimeString();
    };

    return (
        <div className="weather-info">
            <h2>{name}</h2>
            <div className="temperature">{temp}°C</div>
            <div className="description">{description}</div>
            <p>最低温度: {temp_min}°C</p>
            <p>最高温度: {temp_max}°C</p>
            <p>气压: {pressure} hPa</p>
            <p>风速: {speed} m/s</p>
            <p>风向: {deg}°</p>
            <p>云量: {clouds.all}%</p>
            <p>日出时间: {formatTime(sunrise)}</p>
            <p>日落时间: {formatTime(sunset)}</p>
            <img
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt={description}
                style={{ width: '50px', height: '50px' }}
            />
        </div>
    );
};

export default Weather;
