import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function PlanetsDetails() {
  const [selectedPlanet, setSelectedPlanet] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchPlanetDetails = async () => {
      try {
        const response = await fetch(`http://swapi.dev/api/planets/${id}`);
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
      <div className="mt-10">
        <Link to="/" className="font-audio text-4xl">
          Single Planet Details
        </Link>
      </div>

      <div className="">
        {selectedPlanet ? (
          <>
            <h2>More Details about Planet</h2>
            <p>Name:{selectedPlanet.name}</p>
            <p>Climate: {selectedPlanet.climate}</p>
            <p>Population: {selectedPlanet.population}</p>
            <p>Diameter: {selectedPlanet.diameter}</p>
            <p>Gravity: {selectedPlanet.gravity}</p>
            <button className="goBack" onClick={backToList}>
              Back To List
            </button>
          </>
        ) : (
          <p>Error loading details</p>
        )}
      </div>
    </>
  );
}
