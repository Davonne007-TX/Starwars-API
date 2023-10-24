import "./css/Home-NavBar.css";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <>
      <div className="vader">
        <div className="header-container">
          <h1>Star Wars Planets</h1>
          <NavBar />
        </div>
      </div>
    </>
  );
}
