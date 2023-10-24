import NavBar from "./NavBar";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="header">
        <Link to="/">About Page</Link>
        <NavBar />
      </div>
    </>
  );
}
