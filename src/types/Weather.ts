export interface Weather {
  city: string;
  temperature: number;
  description: string;
  lat: number;
  lon: number;
  humidity: number;
  windSpeed: number;
  hourly: { time: number; temp: number }[];
}
