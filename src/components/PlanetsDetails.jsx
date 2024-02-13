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
      <section className="bg-space bg-contain flex flex-col h-screen justify-center items-center">
        <br />
        <Link
          to="/"
          className="font-audio mt-20 md:mt-10 lg:mt-10  text-4xl hover:text-darkRed hover:underline"
        >
          Selected Planet Details
        </Link>

        <div className="flex flex-col justify-center items-center h-screen">
          {selectedPlanet ? (
            <>
              <div className="font-serif text-2xl mt-10 md:mt-10 lg:mt-10 bg-white w-80 md:w-auto lg:w-auto text-black m-10 lg:m-8 rounded-2xl">
                <h2 className=" text-lg md:text-4xl lg:text-4xl font-mono mb-10 mt-5 p-2">
                  More Details about Planet
                </h2>
                <div className="lg:mt-10">
                  <p className="font-audio text-3xl md:text-5xl lg:text-5xl mb-5">
                    {selectedPlanet.name}
                  </p>
                  <div className="font-sans text-lg md:text-2xl lg:text-2xl">
                    <p>Climate: {selectedPlanet.climate}</p>
                    <p>Population: {selectedPlanet.population}</p>
                    <p>Diameter: {selectedPlanet.diameter}</p>
                    <p>Rotation Period:{selectedPlanet.rotation_period}</p>
                    <p>Gravity: {selectedPlanet.gravity}</p>
                    <p>Orbital Period: {selectedPlanet.orbital_period}</p>
                    <p>Terrain:{selectedPlanet.terrain}</p>
                  </div>
                </div>
                <Button
                  className="bg-black p-2 rounded-full font-audio text-white hover:underline"
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
