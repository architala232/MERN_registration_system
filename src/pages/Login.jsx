import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

 const handleLogin = () => {

  fetch("http://localhost:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {

      if (!data.success) {
        alert(data.message);
        return;
      }

      localStorage.setItem(
        "currentUser",
        JSON.stringify(data.user)
      );

      if (
        data.user.role.toLowerCase() ===
        "student"
      ) {
        navigate("/student");
      } else {
        navigate("/teacher");
      }

    })
    .catch((error) => {
      console.log(error);
    });

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