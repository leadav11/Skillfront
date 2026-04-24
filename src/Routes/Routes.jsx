import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
// Importación de páginas
import Quizz from "../Components/Quizz";
import Beca from "../Pages/Beca";
import Kids from "../Pages/Kids";
import Young from "../Pages/Young";
import Adult from "../Pages/Adult";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Features from "../Pages/Features";
import Perfil from "../Pages/Perfil";
import RouteDetails from "../Components/RouteDetails";
import CourseDetails from "../Components/CourseDetails";
import {
  kidsCourses,
  teensCourses,
  adultsCourses,
  defaultCourses,
} from "../Pages/Features";

// Importar las rutas para los links del header
import Planes from "../Pages/Planes";
import Pago from "../Pages/Pago";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Redirección por defecto */}
        <Route path="/" element={<Navigate to="/Young" replace />} />
        
        <Route path="/cursos" element={<Features />} />
        <Route path="/planes" element={<Planes />} />
        <Route path="/Beca" element={<Beca />} />
        <Route path="/Quizz" element={<Quizz />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/Young" element={<Young />} />
        <Route path="/Adult" element={<Adult />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/ruta/:id" element={<RouteDetails />} />
        <Route
          path="/course/:id"
          element={
            <CourseDetails
              courses={[
                ...kidsCourses,
                ...teensCourses,
                ...adultsCourses,
                ...defaultCourses,
              ]}
            />
          }
        />
        <Route path="/carrito" element={<Pago />} />
      </Routes>
    </Router>
  );
}
