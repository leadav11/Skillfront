import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Estilos para personalizar el fondo según el tipo de página
const cardStyles = {
  kids: {
    bgColor: "bg-[#800080]/70",
    titleFont: "font-bubblegum text-yellow-500 text-xl",
    paragraphFont: "text-blue-100 font-bubblegum",
    buttonColor: "bg-purple-400 hover:bg-purple-500 text-black  font-bubblegum",
    buttonCarrito:"bg-yellow-500 hover:bg-yellow-400 text-black font-bubblegum",
    buttonText: "¡Explorar!",
  },
  young: {
    bgColor: "bg-pink-800",
    titleFont: "font-arcade text-yellow-300 text-4xl",
    paragraphFont: "text-white font-arcade text-xs mb-3",
    buttonColor: "bg-yellow-500 font-arcade text-xs",
    buttonCarrito:"bg-blue-600 hover:bg-blue-500 text-white font-arcade text-xs",
    buttonText: "¡Aprender ahora!",
  },
  adult: {
    bgColor: "bg-black/40",
    titleFont: "font-bree text-yello-500 text-4xl",
    paragraphFont: "text-gray-300 font-bree mb-2",
    buttonColor: "bg-yellow-500 hover:bg-yellow-400 font-bree text-black ",
    buttonCarrito:"bg-green-700 hover:bg-green-500 text-white font-bree",
    font:"font-bree",
    buttonText: "Inscribirse",
  },
  default: {
    bgColor: "bg-[#14285a]/100",
    titleFont: "font-sans text-yellow-500 text-3xl",
    paragraphFont: "text-white",
    buttonColor: "bg-yellow-500",
    buttonCarrito:"bg-blue-700 hover:bg-blue-600 text-white  ",
    buttonText: "Comprar",
  },
  rutaTittle: {
    bgColor: "bg-blue-500",
  },
  // Agregar más estilos según sea necesario
};

export default function CourseCard ({
  id,
  title,
  description,
  image,
  level,
  students,
  price,
  rating,
  tags,
  videoUrl,
  variant = "default",
  buttonColor,
}) {

  const [clicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    const courseData = {
      id,  // Usar el id único del curso
      title,
      description,
      image,
      level,
      tags,
      price,
      rating,
      students,
      videoUrl,
    };

    // Cargar el carrito desde localStorage
    const storedCourses = JSON.parse(localStorage.getItem("cart")) || [];

    // Comprobar si el curso ya está en el carrito por su id
    const courseExists = storedCourses.some((course) => course.id === id);

    if (!courseExists) {
      // Si no existe, agregar al carrito
      const updatedCart = [...storedCourses, courseData];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setClicked(true); // Cambiar el estado a "añadido al carrito"
    } else {
      // Si ya existe, mostrar un mensaje o simplemente no hacer nada
      alert("Este curso ya está en tu carrito.");
  }
};

  const navigate = useNavigate();
  const styles = cardStyles[variant] || cardStyles.default;

  const handleShowDetails = () => {
    navigate(`/course/${id}?variant=${variant}`);
  };

  return (
    <div
      className={`w-80 h-[34rem] mb-6 mx-auto text-white shadow-lg rounded-lg overflow-hidden ${styles.bgColor}`}
    >
      {/* Imagen */}
      <img className="my-2 w-30 h-40 m-auto object-cover" src={image} alt={title} />

      {/* Contenido */}
      <div className="p-4">
        <h2 className={`text-lg font-semibold ${styles.titleFont}`}>{title}</h2>
        <p className={`text-sm mt-1 ${styles.paragraphFont}`}>Nivel: {level}</p>
        <p className={`text-sm mt-1 ${styles.paragraphFont}`}>
          Estudiantes: {students}
        </p>
        <p className={`text-sm mt-1 ${styles.paragraphFont}`}>Precio: ${price}</p>
        <p className={`text-sm mt-1 ${styles.paragraphFont}`}>
          Calificación: {rating} ⭐
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="bg-white text-black text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-1 text-yellow-400">
            <FaStar />
            <span>{rating}</span>
          </div>
          <span className="text-lg font-bold">${price}</span>
        </div>
        <button
          className= {`${styles.buttonCarrito} mt-5 px-4 py-2 rounded hover:opacity-90 w-full`}
          onClick={handleButtonClick}
        >
          {clicked ? "Añadido al carrito" : "Añadir al carrito"}
        </button>
        <div className="mt-4 text-center">
        <button
            className={`${buttonColor || styles.buttonColor} px-4 py-2 rounded hover:opacity-90  w-full`}
            onClick={handleShowDetails}
          >
            Ver Detalles
          </button>
        </div>
      </div>
    </div>
  );
}
