import { useNavigate } from "react-router-dom";

function StudentDashboard() {

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("currentUser")
  );

  const logout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div>
      <h1>Student Dashboard</h1>

      <h2>Welcome {user?.name}</h2>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default StudentDashboard;