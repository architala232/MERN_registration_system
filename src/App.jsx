import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import Navbar from "./components/Navbar";
import Students from "./pages/Students";
import ProtectedRoute from "./components/ProtectedRoute";
import StudentList from "./pages/StudentList";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        
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
<Route
  path="/students"
  element={
    <ProtectedRoute>
      <StudentList />
    </ProtectedRoute>
  }
/>
<Route
  path="/students/add"
  element={
    <ProtectedRoute>
      <AddStudent />
    </ProtectedRoute>
  }
/>
<Route
  path="/students/edit/:id"
  element={
    <ProtectedRoute>
      <EditStudent />
    </ProtectedRoute>
  }
/>
        

      </Routes>

    </BrowserRouter>
  );
}

export default App;