import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "./Button";

export default function PlanetsDetails() {
  const [selectedPlanet, setSelectedPlanet] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchPlanetDetails = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/planets/${id}`);
        const planetDetails = await response.json();
        console.log("Selected Planet:", planetDetails);
        setSelectedPlanet(planetDetails);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    if (id) {
      fetchPlanetDetails();
    }
  }, [id]);

  //useNavigate
  const navigate = useNavigate();

  function backToList() {
    navigate("/planets");
  }

  return (
    <>
      <section className="bg-space bg-contain">
        <br />
        <Link
          to="/"
          className="font-audio text-4xl hover:text-darkRed hover:underline"
        >
          Selected Planet Details
        </Link>

        <div className="flex flex-col justify-center items-center h-screen">
          {selectedPlanet ? (
            <>
              <div className="font-serif text-2xl mt-10 bg-white text-black m-4 mb-4 p-2 lg:p-8 rounded-2xl">
                <h2 className="text-4xl font-mono mb-10 mt-5">
                  More Details about Planet
                </h2>
                <p className="font-audio text-5xl mb-5">
                  {selectedPlanet.name}
                </p>
                <div className="font-sans">
                  <p>Climate: {selectedPlanet.climate}</p>
                  <p>Population: {selectedPlanet.population}</p>
                  <p>Diameter: {selectedPlanet.diameter}</p>
                  <p>Rotation Period:{selectedPlanet.rotation_period}</p>
                  <p>Gravity: {selectedPlanet.gravity}</p>
                  <p>Orbital Period: {selectedPlanet.orbital_period}</p>
                  <p>Terrain:{selectedPlanet.terrain}</p>
                </div>
                <Button
                  className="mt-10 bg-black p-2 rounded-full font-audio text-white hover:underline"
                  onClick={backToList}
                  label={"Back To List"}
                ></Button>
              </div>
            </>
          ) : (
            <p className="font-audio text-5xl">Planet is loading</p>
          )}
        </div>
      </section>
    </>
  );
}
