import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/Planets.css";

export default function PlanetsDetails() {
  const [planet, setPlanets] = useState([]);

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

      <img src="/images/planet.jpg" className="orangePlanet" />
    </>
  );
}
