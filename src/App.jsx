import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import Navbar from "./components/Navbar";
import Students from "./pages/Students";


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route
          path="/students"
          element={<Students />}
        />

        <Route
          path="/"
          element={<Register />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/student"
          element={<StudentDashboard />}
        />

        <Route
          path="/teacher"
          element={<TeacherDashboard />}
        />
        

      </Routes>

    </BrowserRouter>
  );
}

export default App;