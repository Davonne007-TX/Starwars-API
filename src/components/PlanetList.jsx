import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/Planets.css";

export default function PlanetList({ setSelectedPlanet }) {
  const [planets, setPlanets] = useState([]);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch("http://swapi.dev/api/planets");
      const starWarsPlanets = await response.json();
      console.log("Star Wars Planets:", starWarsPlanets);
      setPlanets(starWarsPlanets.results);
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
      {planets.map((planet) => (
        <div className="starWarsPlanet" key={planet.url}>
          <h3>{planet.name}</h3>
          <p>Climate: {capitalizeFirstLetter(planet.climate)}</p>
          <p>Population: {planet.population}</p>
          <p>Gravity:{planet.gravity}</p>
          <p>Orbital Period:{planet.orbital_period}</p>
          <button
            type="button"
            className="seeDetails"
            onClick={() => setSelectedPlanet(planet)}
          >
            See Details
          </button>
        </div>
      ))}
    </>
  );
}
