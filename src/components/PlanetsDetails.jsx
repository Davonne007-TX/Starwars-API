import NavBar from "./NavBar";
import { useEffect, useState, useParams } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function PlanetsDetails({ planet, setSelectedPlanet }) {
  const [singlePlanet, setSinglePlanet] = useState(null);

  useEffect(() => {
    const fetchPlanetDetails = async (id) => {
      try {
        const response = await fetch(`http://swapi.dev/api/planets/${id}`);

        const getSinglePlanet = await response.json();
        console.log("Single Planet:", getSinglePlanet);
        setSinglePlanet(getSinglePlanet);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchPlanetDetails();
  }, []);

  const navigate = useNavigate();

  function backToList() {
    navigate("/planets");
  }

  return (
    <>
      <div className="header">
        <Link to="/" className="heading2">
          Single Planet Details
        </Link>
        <NavBar />
      </div>

      <div className="single-planet-container">
        {singlePlanet ? (
          <>
            <h2>More Details about Planet</h2>
            <p>Name:{singlePlanet.name}</p>
            <p>Climate: {singlePlanet.climate}</p>
            <p>Population: {singlePlanet.population}</p>
            <p>Diameter: {singlePlanet.diameter}</p>
            <p>Gravity: {singlePlanet.gravity}</p>
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
