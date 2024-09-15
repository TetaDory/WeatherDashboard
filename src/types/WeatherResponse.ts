export interface WeatherResponse {
    city: { name: string; coord: { lat: number; lon: number } };
    list: {
      dt: number;
      main: { temp: number; humidity: number };
      weather: { description: string }[];
      wind: { speed: number };
    }[];
  }
  