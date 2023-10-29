import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PlanetsDetails({ planet, setSelectedPlanet }) {
  const [singlePlanet, setSinglePlanet] = useState(null);

  useEffect(() => {
    const fetchSinglePlanetDetails = async () => {
      try {
        const response = await fetch(planet.url);
        const getSinglePlanet = await response.json();
        console.log("Single Planet:", getSinglePlanet);
        setSinglePlanet(getSinglePlanet);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchSinglePlanetDetails();
  }, []);

  return (
    <>
      <div className="header">
        <Link to="/">Single Planet Details</Link>
        <NavBar />
      </div>
    </>
  );
}
