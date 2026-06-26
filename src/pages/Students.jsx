import { useEffect, useState } from "react";

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
  fetch("http://localhost:5000/students")
    .then((res) => {
      console.log("Response:", res);
      return res.json();
    })
    .then((data) => {
      console.log("Data:", data);
      setStudents(data);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}, []);

  return (
  <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">

        <div className="card shadow">

          <div className="card-header bg-success text-white">
            <h3 className="mb-0">Add Student</h3>
          </div>

          <div className="card-body">

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Student Name"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Department</label>
                <input
                  type="text"
                  className="form-control"
                  name="department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  placeholder="Enter Department"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-success w-100"
              >
                Save Student
              </button>

            </form>

          </div>

        </div>

      </div>
    </div>
  </div>
);
}

export default Students;