import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Money from "../assets/Images/money360.svg";
import Lado from "../assets/Icons/Lado.svg";
import PacmanOrange from "../assets/Images/Pacman-orange .svg";

// Configuración de estilos para cada variante
const pageStyles = {
  default: {
    bgClass:
      "bg-gradient-to-b from-[#223a76] to-[#686ebf] bg-local bg-cover bg-center",
    bgImage: Lado,
    titleColor: "text-yellow-400",
    buttonClass: "bg-[#daaa00] hover:bg-yellow-600 font-bold text-lg",
    inputBg: "bg-white text-gray-600",
    titleSize: "text-xl lg:text-4xl font-bold",
    DescriptionSize: "text-xl lg:text-2xl",
    subTitleSize: "text-lg",
    fontClass: "font-sans",
    bgForm: "bg-blue-950/90",
    fileTextClass: "text-yellow-400", // Clase de color para adolescentes
    DescriptionColor: "text-gray-200",
    secondTitleColor: "text-yellow-400",
    thirdTitleColor: "text-yellow-400",
    parrafoSub: "text-gray-200",
    inputSize: "text-xs",
    bgb: "bg-[#d9a900] hover:bg-yellow-600",
  },
  young: {
    bgClass: "bg-gradient-to-b from-[#000000]/90 to-[#3533cd]/100",
    titleColor: "text-[#ff0070]/80",
    buttonClass: "bg-pink-600 hover:bg-pink-400 font-normal text-xs",
    inputBg: "bg-gray-800 text-yellow-200",
    titleSize: "text-xl lg:text-xl font-bold",
    DescriptionSize: "text-sm lg:text-sm",
    subTitleSize: "text-sm",
    fontClass: "font-arcade",
    bgForm: "bg-black/50",
    fileTextClass: "text-green-500", // Clase de color predeterminada para el texto del archivo
    parrafoSub: "text-gray-200",
    inputSize: "text-xs",
    secondTitleColor: "text-green-500",
    thirdTitleColor: "text-yellow-400",
    parrafoSub: "text-gray-200",
  },

  kids: {
    bgClass: "bg-gradient-to-br from-purple-800 to-purple-400", // Fondo
    titleColor: "text-yellow-300", // Título en amarillo suave para resaltar
    buttonClass: "bg-pink-500 hover:bg-pink-600 font-bold text-base", 
    inputBg: "bg-white text-black", // Fondo de los inputs blanco, texto negro para mayor legibilidad
    inputSize: "text-base",
    titleSize: "text-3xl lg:text-5xl font-bold", // Título más grande
    DescriptionSize: "text-lg lg:text-2xl font-medium", // Descripción de tamaño legible
    DescriptionColor: "text-white", // Texto de descripción en blanco para que resalte
    subTitleSize: "text-lg lg:text-xl font-semibold", // Subtítulo legible
    fontClass: "font-bubblegum tracking-wider", // Fuente burbujeante para estilo divertido
    bgForm: "bg-[#ffebcd]/40", // Fondo suave para el formulario
    fileTextClass: "text-[#ff5722]", // Color para el texto del archivo seleccionado
    bgb: "bg-pink-500 hover:bg-pink-600 font-bold",
    secondTitleColor: "text-yellow-300", // Título secundario amarillo
    thirdTitleColor: "text-pink-500 ", // Tercero título blanco
    parrafoSub: "text-white tracking-wider" , // Texto adicional blanco para buena legibilidad
    
  },

  adult: {
    bgClass: "bg-gradient-to-bl from-[#053322]/90 to-[#0d6242]/100",
    titleColor: "text-[#ffffff]/80",
    buttonClass: "bg-yellow-600 hover:bg-yellow-500 font-normal text-base",
    inputBg: "bg-gray-900 text-white-900",
    titleSize: "text-xl lg:text-4xl font-bold",
    DescriptionSize: "text-sm lg:text-xl",
    subTitleSize: "text-xl",
    fontClass: "font-bree",
    bgForm: "bg-black/20",
    fileTextClass: "text-green-5 00",
    bgb: "bg-yellow-600 hover:bg-yellow-500",
    parrafoSub: "text-gray-200",
    inputSize: "text-xs",
    secondTitleColor: "text-green-500",
    thirdTitleColor: "text-yellow-400",
    parrafoSub: "text-gray-200",
  },
};

export default function Beca() {
  const navigate = useNavigate();
  const location = useLocation();

  // Detectar la variante según la ruta
  const params = new URLSearchParams(location.search);
  const variant = params.get("variant") || "default";

  // Obtener estilos dinámicos según la variante
  const {
    bgClass,
    bgImage,
    titleColor,
    fontClass,
    titleSize,
    DescriptionSize,
    buttonClass,
    bgForm,
    subTitleSize,
    inputBg,
    fileTextClass,
    bgb,
    DescriptionColor,
    secondTitleColor,
    thirdTitleColor,
    parrafoSub,
    inputSize,
  } = pageStyles[variant];

  const [fileName, setFileName] = useState(""); // Estado para almacenar el nombre del archivo

  // Maneja el clic del botón
  const handleQuizClick = () => {
    navigate(`/Quizz?variant=${variant}`); // Redirige a la ruta "/Quizz" con la variante
  };

  // Manejar el cambio del archivo seleccionado
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name); // Actualizar el estado con el nombre del archivo
    } else {
      setFileName(""); // Si no hay archivo, limpiar el estado
    }
  };

  return (
    <div
      className={`${bgClass} ${fontClass} min-h-screen text-white`}
      style={
        variant === "default" ? { backgroundImage: `url(${bgImage})` } : {}
      }
    >
      <Header variant={variant} />
      <div className="flex flex-col lg:flex-row justify-between items-center px-10 py-16 lg:py-24">
        {/* Left Text Section */}
        <div className="relative lg:w-1/2 space-y-6 mx-10 px-20 py-20">
          {/* Animaciones solo para "young" */}
          {variant === "young" && (
            <>
              {/* Moneda animada con efecto 3D */}
              <motion.img
                src={Money}
                alt="Money Icon"
                className="absolute top-[14rem] left-[-2rem] w-24 h-24"
                animate={{
                  rotateY: [0, 180, 360],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              />
              <motion.img
                src={Money}
                alt="Money Icon"
                className="absolute top-[12rem] left-[45rem] w-24 h-24"
                animate={{
                  rotateY: [0, 180, 360],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              />
              {/* Pacman naranja */}
              <motion.img
                src={PacmanOrange}
                alt="Pacman"
                className="absolute z-0 w-[10rem] h-30 opacity-90 top-60"
                animate={{
                  x: [0, 500, 1300, 500, 0],
                  y: [10, 10, 50, 10, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </>
          )}
          <h2 className={`${titleSize} relative z-10 ${titleColor}`}>
            ¡Postula a una beca ahora mismo!
          </h2>
          <p className={`${DescriptionSize} font-semibold ${DescriptionColor}`}>
            Regístrate para optar por la beca y disfrutar nuestros cursos.
            ¡Estamos emocionados de acompañarte en esta aventura de aprendizaje!
          </p>
          <p className={`${titleSize} font-bold ${secondTitleColor}`}>
            ¡No pierdas esta oportunidad de alcanzar tus metas y disfrutar
            mientras aprendes!
          </p>
          <p className={`${DescriptionSize} font-semibold ${DescriptionColor}`}>
            Nuestros cursos inspiran a los jóvenes, dándoles herramientas para
            explorar su creatividad y desarrollar habilidades técnicas.
          </p>
          <button
            type="button"
            className={`${buttonClass} py-3 px-6 rounded-lg transition duration-300`}
            onClick={handleQuizClick}
          >
            Completa este quizz
          </button>
        </div>

        {/* Right Form Section */}
        <div
          className={`lg:w-2/5 mt-12 mx-10 lg:mt-0 ${bgForm} p-8 rounded-lg shadow-2xl`}
        >
          <form className="space-y-6">
            <h2 className={`${titleSize} font-bold ${thirdTitleColor} `}>
              Solicitud de Beca
            </h2>
            <div className="space-y-2">
              <label
                className={`block ${subTitleSize} font-semibold ${parrafoSub} `}
              >
                Registra tus datos para tu solicitud
              </label>
              <textarea
                placeholder="Nombres"
                className={`w-full p-3 rounded-lg ${inputSize} ${inputBg} focus:outline-none focus:ring-2 focus:ring-red-500`}
              ></textarea>
            </div>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Apellidos"
                className={`w-full p-3 rounded-lg ${inputSize} ${inputBg} focus:outline-none focus:ring-2 focus:ring-red-500`}
              />
            </div>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Correo electrónico"
                className={`w-full p-3 rounded-lg ${inputSize} ${inputBg} focus:outline-none focus:ring-2 focus:ring-red-500`}
              />
            </div>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Número de teléfono a contactar"
                className={`w-full p-3 rounded-lg ${inputSize} ${inputBg} focus:outline-none focus:ring-2 focus:ring-red-500`}
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="request-area"
                className={`block ${subTitleSize} font-semibold ${parrafoSub}`}
              >
                Área de solicitud
              </label>
              <select
                id="request-area"
                defaultValue=""
                className={`w-full p-3 rounded-lg ${inputSize} ${inputBg} focus:outline-none focus:ring-2 focus:ring-red-500`}
              >
                <option value="" disabled>
                  Seleccione un área
                </option>
                <option value="Soporte Técnico">Soporte Técnico</option>
                <option value="Ventas">Ventas</option>
                <option value="Facturación">Facturación</option>
              </select>
            </div>
            <div className="space-y-2">
              {/* Input File Oculto */}
              <input
                type="file"
                id="file-upload"
                className="hidden"
                onChange={handleFileChange}
              />
              {/* Botón Personalizado */}
              <label
                htmlFor="file-upload"
                /* className={`${subTitleSize} cursor-pointer inline-block ${bgb} text-white font-bold py-2 px-4 rounded-lg transition`} */
                className={`${subTitleSize} cursor-pointer inline-block ${bgb} bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition`}
              >
                Seleccionar Archivo
              </label>
              {/* Mostrar Nombre del Archivo Seleccionado */}
              <div
                className={`${
                  fileName ? fileTextClass : parrafoSub
                } ${subTitleSize} font-semibold mt-2`}
              >
                {fileName
                  ? `Archivo seleccionado: ${fileName}`
                  : "No se ha seleccionado ningún archivo"}
              </div>
            </div>
            <button
              type="submit"
              className={`${buttonClass} w-full py-3 px-6 rounded-lg transition duration-300`}
            >
              Enviar Solicitud
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
