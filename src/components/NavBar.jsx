import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Link to="/about">About</Link>
      <Link to="/planets">Planets</Link>
    </>
  );
}
