import axios from 'axios';
import { Weather } from '../types/Weather';
import { WeatherResponse } from '../types/WeatherResponse';

const API_KEY = 'ae065c86dcaf8824a9b19989a9056223';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export const fetchWeather = async (city: string): Promise<Weather> => {
  try {
    const {data: { list, city: cityName }} = await axios.get<WeatherResponse>(`${BASE_URL}`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
        cnt: 8, // Fetch data for 8 time points (3-hour intervals for 24 hours)
      },
    });

    const weatherData: Weather = {
      city: cityName.name,
      temperature: list[0].main.temp,
      description: list[0].weather[0].description,
      lat: cityName.coord.lat,
      lon: cityName.coord.lon,
      humidity: list[0].main.humidity,
      windSpeed: list[0].wind.speed,
      hourly: list.map((entry) => ({
        time: entry.dt,
        temp: entry.main.temp,
      })),
    };

    return weatherData;
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
};

export const fetchWeatherByLocation = async (
  lat: number,
  lon: number
): Promise<Weather> => {
  try {
    const { data:{ list, city: cityName } } = await axios.get<WeatherResponse>(`${BASE_URL}`, {
      params: {
        lat: lat,
        lon: lon,
        appid: API_KEY,
        units: 'metric',
        cnt: 8, // Fetch data for 8 time points (3-hour intervals for 24 hours)
      },
    });

    const weatherData: Weather = {
      city: cityName.name,
      temperature: list[0].main.temp,
      description: list[0].weather[0].description,
      lat: cityName.coord.lat,
      lon: cityName.coord.lon,
      humidity: list[0].main.humidity,
      windSpeed: list[0].wind.speed,
      hourly: list.map((entry) => ({
        time: entry.dt,
        temp: entry.main.temp,
      })),
    };

    return weatherData;
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
};
