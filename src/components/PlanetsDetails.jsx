import NavBar from "./NavBar";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PlanetsDetails() {
  const [singlePlanet, setSinglePlanet] = useState(null);

  return (
    <>
      <div className="header">
        <Link to="/">Single Planet Details</Link>
        <NavBar />
      </div>
    </>
  );
}
