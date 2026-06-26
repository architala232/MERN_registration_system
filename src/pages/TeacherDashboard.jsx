import { useNavigate } from "react-router-dom";

function TeacherDashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">

          <div className="card shadow">

            <div className="card-header bg-success text-white">
              <h3 className="mb-0">Teacher Dashboard</h3>
            </div>

            <div className="card-body">

              <h4>Welcome {user.name}</h4>

              <hr />

              <p><strong>Email:</strong> {user.email}</p>

              <p><strong>Department:</strong> {user.department}</p>

              <p><strong>Role:</strong> {user.role}</p>

              <button
                className="btn btn-danger"
                onClick={handleLogout}
              >
                Logout
              </button>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default TeacherDashboard;