import PlanetList from "./components/PlanetList";
import PlanetsDetails from "./components/PlanetDetails";
import { useState } from "react";

export default function SelectedPlanet() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  return (
    <>
      {selectedPlanet ? (
        <PlanetsDetails
          planet={selectedPlanet}
          setSelectedPlanet={setSelectedPlanet}
        />
      ) : (
        <PlanetList setSelectedPlanet={setSelectedPlanet} />
      )}
    </>
  );
}
