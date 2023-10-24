import NavBar from "./NavBar";
import { Link } from "react-router-dom";

export default function Planets() {
  return (
    <>
      <div className="header">
        <Link to="/">Planets Page</Link>
        <NavBar />
      </div>
    </>
  );
}
