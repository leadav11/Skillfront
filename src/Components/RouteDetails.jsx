import React from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Header from "./Header";

export default function RouteDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // Obtén el variant desde los parámetros de la URL
  const variant = searchParams.get("variant") || "default";

  // Configuración de estilos por variante
  const variantStyles = {
    default: {
      bgColor: "bg-gradient-to-r from-blue-900 to-blue-800",
      cardBgColor: "bg-black/40",
      buttonColor: "bg-blue-700 hover:bg-blue-500 text-white font-bree",
      titleSize: "text-5xl text-yellow-500 font-bree",
      subTitleSize: "text-white font-bree text-2xl", 
      descriptionSize: "text-base font-bold text-black font-bree",
    },
    kids: {
      bgColor: "bg-gradient-to-b from-[#5de0e6] to-[#004aad]",
      cardBgColor: "bg-white/70",
      buttonColor: "bg-blue-700 hover:bg-blue-500 text-white font-bubblegum",
      titleSize: "text-2xl text-yellow-500 font-bubblegum",
      subTitleSize: "text-blue-600 font-bubblegum text-xl", 
      descriptionSize: "text-base font-bold text-black font-bubblegum",
    },
    young: {
      bgColor: "bg-gradient-to-b from-[#000000]/90 to-[#3533cd]/100",
      cardBgColor: "bg-black/50",
      buttonColor: "bg-pink-700 hover:bg-pink-500 text-white",
      titleSize:
        "text-3xl text-yellow-500 text-shadow-neon animate-neonFlicker font-arcade",
      subTitleSize: "text-yellow-500 font-arcade text-xs",
      descriptionSize: "text-xs text-green-500 font-arcade",
    },
    adult: {
      bgColor: "bg-gradient-to-r to-[#0b583b]/100 from-[black]",
      cardBgColor: "bg-black/50",
      buttonColor: "bg-yellow-500 hover:bg-yellow-400 text-black font-bree",
      titleSize:
        "text-3xl text-yellow-500  font-bree",
      subTitleSize: "text-white font-bold font-bree text-xl",
      descriptionSize: "text-md text-green-500 font-bree font-bold",
    },
  };

  const styles = variantStyles[variant] || variantStyles.default;

  const route = location.state?.route; // Información pasada al navegar

  // Manejo de errores si no hay datos
  if (!route) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${styles.bgColor}`}
      >
        <p className="text-gray-600">
          No se encontró información sobre esta ruta.
        </p>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${styles.bgColor} p-6`}>
      {/*Llamado al header dinamico*/}
      <Header variant={variant} />
      <div
        className={`max-w-4xl mx-auto ${styles.cardBgColor} mt-20 shadow-lg rounded-lg p-8`}
      >
        {/* Información general de la ruta */}
        <p
          className={`uppercase tracking-wider mb-6 ${styles.descriptionSize}`}
        >
          Ruta
        </p>
        <h1 className={`${styles.titleSize} font-bold mb-6`}>{route.title}</h1>
        <p className={`${styles.descriptionSize} mb-6`}>{route.description}</p>
        <button
          className={`px-6 py-3 rounded-lg ${styles.buttonColor}`}
          onClick={() => navigate("/inicio")}
        >
          Empieza ya
        </button>

        {/* Categorías y Cursos */}
        <div className="mt-8 ">
          <h2 className={`text-2xl font-bold mb-6 ${styles.titleSize}`}>
            Cursos de la Ruta
          </h2>
          {route.categories && route.categories.length > 0 ? (
            route.categories.map((category, index) => (
              <div key={index} className="mb-6">
                <h3
                  className={`text-xl font-semibold mb-5 mt-10 ${styles.subTitleSize}`}
                >
                  {category.name}
                </h3>
                <ul className="space-y-3">
                  {category.courses.map((course, courseIndex) => (
                    <li
                      key={courseIndex}
                      className="flex items-center justify-between bg-gray-200 p-4 rounded-lg shadow"
                    >
                      <div className="flex items-center">
                        <img
                          src={course.icon}
                          alt={course.title}
                          className="w-10 h-10 mr-4"
                        />
                        <span
                          className={`font-semibold ${styles.descriptionSize}`}
                        >
                          {course.title}
                        </span>
                      </div>
                      <span
                        className={`text-sm text-gray-600 ${styles.descriptionSize}`}
                      >
                        {course.contentHours}h contenido /{" "}
                        {course.practiceHours}h práctica
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p className={`${styles.descriptionSize}`}>
              No hay categorías disponibles.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
