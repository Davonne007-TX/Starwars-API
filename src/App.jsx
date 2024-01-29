import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PlanetList from "./components/PlanetList";
import PlanetsDetails from "./components/PlanetsDetails";
import { useState } from "react";

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/planets"
        element={<PlanetList setSelectedPlanet={setSelectedPlanet} />}
      />
      <Route path="/planet-details/:id" element={<PlanetsDetails />} />
    </Routes>
  );
}

export default App;
