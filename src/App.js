import React from "react";
import Navbar from "./components/Navbar";
import Location from "./components/Location";
import data from "../src/data";

export default function App() {
  const locations = data.map((place) => {
    return <Location key={place.id} {...place} />;
  });

  return (
    <div className="container">
      <Navbar />
      <div className="card--container">{locations}</div>
    </div>
  );
}
