import React from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  kidsCourses,
  teensCourses,
  adultsCourses,
  defaultCourses,
} from "../Pages/Features";
import Header from '../Components/Header'
import { color } from "framer-motion";

const detailStyles = {
  kids: {
    bgColor: "bg-gradient-to-b from-[#004aad] to-[#5de0e6]",
    bgcontent:"bg-white/90",
    bgTemario:"bg-black/20",
    title: "text-pink-500 text-3xl font-bold font-bubblegum",
    description:"text-yellow-400 font-bubblegum text-xl",
    font:"font-bubblegum text-base",
    textColor: "text-blue-800",
    buttonColor: "bg-green-500",
  },
  young: {
    bgColor: "bg-gradient-to-b from-[#000000]/90 to-[#3533cd]/100",
    bgcontent:"bg-black/70",
    bgTemario:"bg-black/30",
    title: "text-yellow-300 text-2xl font-arcade",
    description:"text-green-400 font-arcade text-xs",
    font:"font-arcade text-xs",
    color:"text-green-500",
    buttonColor: "bg-yellow-500",
  },
  adult: {
    bgColor: "bg-gradient-to-b from-[#0b583b] to-[#000]",
    bgcontent:"bg-black/30",
    bgTemario:"bg-gray-900/60",
    title: "text-white text-3xl font-bree font-bold",
    description:"text-green-400 font-bree text-md",
    font:"font-bree text-sm",
    color:"text-green-500",
    buttonColor: "bg-yellow-500",
  },
  default: {
    bgColor: "bg-gradient-to-b from-blue-900 to-blue-900/90",
    bgcontent:"bg-black/30",
    bgTemario:"bg-gray-900/60",
    title: "text-white text-3xl font-bree font-bold",
    description:"text-yellow-400 font-bree text-md",
    font:"font-bree text-sm",
    color:"text-green-500",
    buttonColor: "bg-yellow-500",
  },
};

const CourseDetails = ({ courses }) => {
  const { id } = useParams();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const variant = params.get("variant") || "default";

  const styles = detailStyles[variant] || detailStyles.default;

  const filteredCourses =
    variant === "kids"
      ? kidsCourses
      : variant === "young"
      ? teensCourses
      : variant === "adult"
      ? adultsCourses
      : defaultCourses;

  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return <div className="text-center text-red-500">Curso no encontrado.</div>;
  }

  return (
    <>
    <div className={`min-h-screen  ${styles.bgColor} p-8`}> 
    <Header variant={variant}/> 
      <div className={`${styles.bgcontent } max-w-7xl mx-auto rounded-lg shadow-lg p-6`}>
        {/* Imagen ocupando dos columnas */}
        <div className="relative h-60 w-full bg-cover bg-center rounded-lg mb-6">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
        </div>

        {/* Contenido principal: Video y descripción a la izquierda, contenido del curso a la derecha */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Columna izquierda: Video y descripción */}
          <div className="flex-1">
            <iframe
              src={course.videoUrl}
              title={course.title}
              width="100%"
              height="315"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-md mb-4"
            ></iframe>
         {/* Descripción */}
         <div className="mb-6">
            <h2 className={`${styles.title} mb-2 `}>{course.title}</h2>
            <p className={`${styles.description}`}>{course.description}</p>
          </div>
          
            {/* Información del curso */}
          <div className={`${styles.font} flex flex-wrap items-center bg-gray-100 rounded-lg p-4 mb-6 shadow-md `}>
            <div className="flex items-center space-x-2 text-gray-700 mr-8">
              <span>🎥</span>
              <p >Horas de video: {course.videoHours || 10}</p>
            </div>
            <div className="flex items-center space-x-2 text-gray-700 mr-8">
              <span>⭐</span>
              <p>Puntuación: {course.rating }</p>
            </div>
            <div className="flex items-center space-x-2 text-gray-700 mr-8">
              <span>📈</span>
              <p>Dificultad: {course.level}</p>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <span>💵</span>
              <p>Precio: ${course.price}</p>
            </div>
          </div>
          </div>

          {/* Columna derecha: Contenido del curso */}
          <div className= {`${styles.bgTemario} w-full md:w-1/3 rounded-lg shadow-lg p-6`}>
            <h2 className={`${styles.title} text-md `}>
              Contenido del curso
            </h2>
            <ul className="space-y-2">
              {course.sections?.map((section, index) => (
                <li
                  key={index}
                  className="p-2 bg-gray-100 rounded shadow hover:bg-gray-200 cursor-pointer"
                >
                  {section}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CourseDetails;
