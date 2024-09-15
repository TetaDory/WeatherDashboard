import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface TemperatureGraphProps {
  data: { time: string; temp: number }[];
}

const TemperatureGraph: React.FC<TemperatureGraphProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="temp" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TemperatureGraph;
