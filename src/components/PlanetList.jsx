import NavBar from "./NavBar";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Planets.css";

export default function PlanetsDetails() {
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
