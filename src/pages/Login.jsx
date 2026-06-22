import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    const userData = localStorage.getItem(
      email.trim().toLowerCase()
    );

    if (!userData) {
      alert("User Not Found");
      return;
    }

    const user = JSON.parse(userData);

    if (user.password.trim() !== password.trim()) {
      alert("Wrong Password");
      return;
    }

    localStorage.setItem(
      "currentUser",
      JSON.stringify(user)
    );

    if (user.role.toLowerCase() === "student") {
      navigate("/student");
    } else {
      navigate("/teacher");
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;