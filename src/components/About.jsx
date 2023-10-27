import NavBar from "./NavBar";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="header">
        <Link to="/" className="heading2">
          About Page
        </Link>
        <NavBar />
      </div>
    </>
  );
}
