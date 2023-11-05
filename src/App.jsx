import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import PlanetList from "./components/PlanetList";
import PlanetsDetails from "./components/PlanetsDetails";
import { useState } from "react";

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/planets"
          element={<PlanetList setSelectedPlanet={setSelectedPlanet} />}
        />
        <Route
          path="/planet-details"
          element={<PlanetsDetails />}
          selectedPlanet={selectedPlanet}
        />
      </Routes>
    </>
  );
}

export default App;

// {selectedPlanet ? (
//   <PlanetsDetails
//     planet={selectedPlanet}
//     setSelectedPlanet={setSelectedPlanet}
//   />
// ) : (
//   <PlanetList setSelectedPlanet={setSelectedPlanet} />
// )}
