import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [role, setRole] = useState("");

const handleSubmit = () => {

  if (
    !name ||
    !email ||
    !password ||
    !department ||
    !role
  ) {
    alert("Please fill all fields");
    return;
  }

  const user = {
    name,
    email,
    password,
    department,
    role,
  };

  fetch("http://localhost:5000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      alert(data.message);
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

  return (
    <div>

      <h1>Student Registration</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="">Select Department</option>
        <option>Computer</option>
        <option>IT</option>
        <option>Mechanical</option>
        <option>Civil</option>
      </select>

      <br /><br />

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="">Select Role</option>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
      </select>

      <br /><br />

      <button onClick={handleSubmit}>
        Register
      </button>

    </div>
  );
}

export default Register;