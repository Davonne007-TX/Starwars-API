import { Link } from "react-router-dom";
import "./css/Home-NavBar.css";

export default function NavBar() {
  return (
    <div className="myLinks">
      <Link to="/about">About</Link>
      <Link to="/planets">Planets</Link>
    </div>
  );
}
