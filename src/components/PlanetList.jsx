import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import "./css/spinner.css";

export default function PlanetList() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  function goToPlanetDetails(url) {
    const planetId = url.split("/").filter(Boolean).pop();
    navigate(`/planet-details/${planetId}`);
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/planets");
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
      <div className="bg-space bg-contain flex flex-col justify-center">
        <Link
          to="/"
          className="font-audio text-5xl hover:text-darkRed hover:underline mt-10"
        >
          Star Wars Planets
        </Link>

        {loading ? (
          <div>
            <div className="font-audio text-6xl flex flex-col h-screen justify-center items-center">
              Loading
              <div className="spinner"></div>
            </div>
          </div>
        ) : (
          planets.map((planet) => (
            <div
              className="flex flex-col justify-center items-center font-mono"
              key={planet.url}
            >
              <div className="flex gap-8 flex-col justify-center items-center bg-darkRed m-10 w-8/12 lg:w-3/12 p-2 rounded-2xl text-xl">
                <h3 className="font-audio text-4xl mt-20">{planet.name}</h3>
                <Button
                  onClick={() => goToPlanetDetails(planet.url)}
                  label={"See Details"}
                ></Button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
