import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import ClipLoader from "react-spinners/ClipLoader";
import { Weather } from "./types/Weather";
import WeatherMap from "./components/WeatherMap";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  fetchWeather,
  fetchWeatherByLocation,
} from "./services/WeatherService";

const App: React.FC = () => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (city: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (err) {
      setError(`City "${city}" not found. Please enter a valid city name.`);
    } finally {
      setLoading(false);
    }
  };

  const handleCurrentLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        setLoading(true);
        setError(null);
        try {
          const data = await fetchWeatherByLocation(
            position.coords.latitude,
            position.coords.longitude
          );
          setWeather(data);
        } catch (err) {
          setError("Unable to fetch weather for your location.");
        } finally {
          setLoading(false);
        }
      });
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="app">
      <SearchBar onSearch={handleSearch} />
      <button onClick={handleCurrentLocation}>Use Current Location</button>
      {loading && <ClipLoader />}
      {error && <p className="error">{error}</p>}
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
  return (
    <div className="app">
      <NavBar /> {/* NavBar component is placed here */}
      <div className="main-content">
        <div className="container mt-4">
          <SearchBar onSearch={handleSearch} />
          <button
            className="btn btn-primary mt-2"
            onClick={handleCurrentLocation}
          >
            Use Current Location
          </button>
          {loading && <ClipLoader />}
          {error && <p className="error">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default App;
