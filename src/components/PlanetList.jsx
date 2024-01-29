import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/spinner.css";

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
      <div className="mt-10">
        <Link
          to="/"
          className="font-audio text-5xl hover:text-darkRed hover:underline"
        >
          Star Wars Planets
        </Link>
      </div>

      {loading ? (
        <>
          <div className="font-audio text-6xl flex flex-col h-screen justify-center items-center">
            Loading
            <div className="spinner"></div>
          </div>
        </>
      ) : (
        planets.map((planet) => (
          <div
            className="flex flex-col justify-center items-center font-mono"
            key={planet.url}
          >
            <div className="flex gap-8 flex-col justify-center items-center bg-darkRed m-10 w-8/12 lg:w-3/12 p-2 rounded-2xl text-xl">
              <h3 className="font-audio text-4xl mt-20">{planet.name}</h3>
              <button
                className="mb-20 bg-black p-2 rounded-full font-audio text-white hover:underline"
                onClick={() => goToPlanetDetails(planet.url)}
              >
                See Details
              </button>
            </div>
          </div>
        ))
      )}
    </>
  );
}
