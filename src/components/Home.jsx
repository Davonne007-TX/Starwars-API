import "./css/home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="vader flex flex-col justify-center items-center h-screen bg-cover">
        <div className="text-7xl font-audio">
          <h1>Star Wars Planets</h1>
          <Link to="/planets" className="hover:text-darkRed text-5xl">
            Start
          </Link>
        </div>
      </div>
    </>
  );
}
