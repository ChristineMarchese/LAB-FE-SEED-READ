import { useNavigate } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
  const navigate = useNavigate();

  function tunerLink() {
    navigate("/songs");
  }
   <div className="nav">
  return 
  <h1 onClick={tunerLink}>TUNER</h1>;
  </div>
}

export default NavBar;
