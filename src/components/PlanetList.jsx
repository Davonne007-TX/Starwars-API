import { useState, useEffect } from "react";

export default function PlanetList() {
  const [planet, setPlanet] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch("http://swapi.dev/api/planets");
        const starWarsPlanets = await response.json();
        console.log("Star Wars Planets:", starWarsPlanets);
        setPlanet(starWarsPlanets.results);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchPlanets();
  }, []);

  return <div>PlanetList</div>;
}
