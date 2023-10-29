import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/Planets.css";

export default function PlanetList({ setSelectedPlanet }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch("http://swapi.dev/api/planets");
        const starWarsPlanets = await response.json();
        setPlanets(starWarsPlanets.results);
        console.log("Star Wars Planets:", starWarsPlanets);
      } catch (error) {
        console.error("Error:", error);
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

      {planets.map((planet) => (
        <div className="starWarsPlanet" key={planet.url}>
          <h3>{planet.name}</h3>
          <p>Climate: {planet.climate}</p>
          <p>Population: {planet.population}</p>
          <p>Gravity:{planet.gravity}</p>
          <p>Orbital Period:{planet.orbital_period}</p>
        </div>
      ))}
    </>
  );
}
