import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Planets.css";

export default function PlanetList({ setSelectedPlanet }) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  function goToPlanetDetails(url) {
    const planetId = url.split("/").filter(Boolean).pop(); // Extract the planet ID
    navigate(`/planet-details/${planetId}`);
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch("http://swapi.dev/api/planets");
        const ourPlanets = await response.json();
        console.log("Star Wars Planets:", ourPlanets);
        setPlanets(ourPlanets.results);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };
    fetchPlanets();
  }, []);

  return (
    <>
      <div className="header">
        <Link to="/" className="heading2">
          Star Wars Planets
        </Link>
        <NavBar />
      </div>

      {loading ? (
        <>
          <div className="loading">Loading</div>
          <div className="spinner"></div>
        </>
      ) : (
        planets.map((planet) => (
          <div className="starWarsPlanet" key={planet.url}>
            <h3>{planet.name}</h3>

            <button
              type="button"
              className="seeDetails"
              onClick={() => goToPlanetDetails(planet.url)}
            >
              See Details
            </button>
          </div>
        ))
      )}
    </>
  );
}
