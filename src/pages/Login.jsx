import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

const handleLogin = async () => {
  try {
    const response = await fetch(
      "http://localhost:5000/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      alert(data.message);
      return;
    }

    localStorage.setItem(
      "currentUser",
      JSON.stringify(data.user)
    );

    alert(data.message);

    if (
      data.user.role.toLowerCase() ===
      "student"
    ) {
      navigate("/student");
    } else {
      navigate("/teacher");
    }
  } catch (error) {
    console.log(error);
    alert("Server Error");
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