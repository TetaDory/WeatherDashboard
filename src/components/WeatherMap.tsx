import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";

interface WeatherMapProps {
  lat: number;
  lon: number;
  city: string;
}

const WeatherMap: React.FC<WeatherMapProps> = ({ lat, lon, city }) => {
  // Center of the map
  const position: LatLngExpression = [lat, lon];

  return (
    <div style={{ height: "300px", width: "100%" }}>
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>{city}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default WeatherMap;
