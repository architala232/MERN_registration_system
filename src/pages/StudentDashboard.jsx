import { useNavigate } from "react-router-dom";

function StudentDashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("currentUser")
  );

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div>
      <h1>Welcome {user.name}</h1>

      <p>Email: {user.email}</p>
      <p>Department: {user.department}</p>
      <p>Role: {user.role}</p>

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default StudentDashboard;