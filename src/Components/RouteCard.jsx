import React from "react";

const RouteCard = ({
  title,
  description,
  icon,
  created_at,
  courses,
  hours,
  bgColor,
  textColor,
  textColorSubTitle,
  buttonColor,
  onClick,
}) => {
  return (
    <div className={`p-6 rounded-lg shadow-lg ${bgColor}`}>
      {/* Icono */}
      <div className="flex justify-center mb-4">
        <img src={icon} alt={title} className="w-12 h-12" />
      </div>
      {/* Título */}
      <h3 className={`text-xl font-bold mb-2 ${textColorSubTitle}`}>{title}</h3>
      {/* Descripción */}
      <p className={`text-sm mb-4 ${textColor}`}>{description}</p>
      {/* Información adicional */}
      <div className={`text-xs text-gray-500 mb-2`}>
        Creado el: {new Date(created_at).toLocaleDateString()}
      </div>
      {/* Información de cursos y horas */}
      <div className={`flex justify-between items-center text-sm ${textColor}`}>
        <span>{courses} cursos</span>
        <span>{hours} horas</span>
      </div>
      {/* Botón */}
      <button
        className={`w-full mt-4 py-2 rounded-lg transition ${buttonColor}`}
        onClick={onClick}
      >
        Conocer Ruta
      </button>
    </div>
  );
};

export default RouteCard;
