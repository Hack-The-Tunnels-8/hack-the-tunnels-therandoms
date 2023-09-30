import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAccountContext } from "../../context";
import "./Navbar.style.scss";

function Navbar() {
  const { loggedIn, logout } = useAccountContext();
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navbar__logo">
      <Link to="/"><img className="navbar__image" src="https://media.discordapp.net/attachments/519295935315050521/1106731452814598226/IMG_8385.gif" /></Link>
      </div>
      <div className="navbar__account">
        {loggedIn() === false ? (
          <>
            <button className="navbar__signup" onClick={() => navigate("/sign-up")}>Sign Up</button>
            <button className="navbar__login" onClick={() => navigate("/login")}>Login</button>
          </>
        ) : (
          <button className="navbar__logout" onClick={() => logout()}>Logout</button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
