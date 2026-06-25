import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import Navbar from "./components/Navbar";
import Students from "./pages/Students";
import ProtectedRoute from "./components/ProtectedRoute";


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
  element={
    <ProtectedRoute>
      <StudentDashboard />
    </ProtectedRoute>
  }
/>

        <Route
  path="/teacher"
  element={
    <ProtectedRoute>
      <TeacherDashboard />
    </ProtectedRoute>
  }
/>
        

      </Routes>

    </BrowserRouter>
  );
}

export default App;