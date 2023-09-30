import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components";
import { useAccountContext } from "../../context";
import "./Login.style.scss";

function Login() {
  const [email, setEmail] = useState("email");
  const [password, setPass] = useState("password");
  const [message, setMessage] = useState(null);
  const { loggedIn, login } = useAccountContext();
  const navigate = useNavigate();

  const attemptLogin = async () => {
    try {
      const message = await login("admin@email.com", "password");
      setMessage(message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (loggedIn() === true) {
      navigate("/");
    }
  }, [loggedIn, navigate]);
  console.log(email)
  console.log(password)
  return (
    <Page>
      <div className="login-page">
        <h1>Login</h1>
        <button onClick={() => attemptLogin()}>
          Login (as user set in code)
        </button>
        <div>
          <input placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email}></input>
        </div>
        <div>
          <input placeholder="password" onChange={(e) => setPass(e.target.value)} value={password}></input>
        </div>
        
        
        {message && <p>{message}</p>}
      </div>
    </Page>
  );
}

export default Login;