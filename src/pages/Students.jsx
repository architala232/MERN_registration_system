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
    <div>
      <h1>Students</h1>

      {students.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>{student.department}</p>
        </div>
      ))}
    </div>
  );
}

export default Students;