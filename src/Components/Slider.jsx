import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Laptop from "../assets/Images/laptop.svg";
import Atomo from "../assets/Images/atomo.svg";
import Bloques from "../assets/Images/bloques.svg";
import Fuente from "../assets/Images/Fuentes.svg";
import Gestion from "../assets/Images/Gestion.svg";
import Usuario from "../assets/Images/Usuario.svg";
import Espada from "../assets/Icons/Espada-gamer.svg";
import ConsolaJuegos from "../assets/Icons/Consola-Juegos.svg";
import PalancaMando from "../assets/Icons/Palanca-Mando.svg";
import Pc from "../assets/Icons/pc.svg";
import PlataformaWeb from "../assets/Icons/Plataforma.svg";
import AcademicWeb from "../assets/Icons/Academic-web.svg";

const pageStyles = {
  default: {
    fontClass: "font-sans text-xl",
    buttonClass: "bg-[#daaa00] text-black hover:bg-yellow-600",
    slideBackground: "bg-transparent from-blue-400 to-indigo-600",
    colortext: "text-white",
  },
  young: {
    fontClass: "font-arcade text-sm",
    buttonClass: "bg-[#ff0068] text-white hover:bg-blue-700",
    slideBackground: "bg-transparent",
    colortext: "text-white",
  },
  kids: {
    fontClass: "font-fredoka text-2xl",
    buttonClass: "bg-[#F8D642] text-[#000000] hover:bg-[#ffe471]",
    slideBackground: "bg-transparent",
    colortext: "text-black",
  },
  Adult: {
    fontClass: "font-bree text-lg",
    buttonClass: "bg-[#dda100] text-white hover:bg-yellow-500",
    slideBackground: "bg-transparent",
    colortext: "text-[white]",
  },
};

const Slider = ({ variant = "default" }) => {
  const location = useLocation();

  const getPageVariant = () => {
    if (location.pathname.toLowerCase().includes("/adult")) return "Adult";
    if (location.pathname.toLowerCase().includes("/young")) return "young";
    if (location.pathname.toLowerCase().includes("/kids")) return "kids";
    return "default";
  };

  const currentVariant = getPageVariant();
  const { fontClass, buttonClass, slideBackground, colortext } =
    pageStyles[currentVariant];

  const slidesVariants = {
    default: [
      {
        image: Pc,
        title: "Sistema Integral de Gestión Educativa",
        description:
          "SkillConnect es una plataforma educativa orientada a mejorar los procesos de las instituciones, docentes, padres de familia y alumnos.",
      },
      {
        image: AcademicWeb,
        title: "Aprende desde cualquier lugar",
        description:
          "Nuestra plataforma te permite acceder a contenidos educativos desde cualquier dispositivo, fomentando la educación a distancia.",
      },

      {
        image: PlataformaWeb,
        title: "Plataforma para Jóvenes",
        description:
          "Accede a contenido interactivo y mejora tus habilidades de manera divertida y moderna.",
      },
    ],
    kids: [
      {
        image: Laptop,
        title: "Diversión y Aprendizaje",
        description:
          "Plataforma interactiva diseñada para que los niños aprendan jugando.",
      },
      {
        image: Bloques,
        title: "Crecer Jugando",
        description:
          "Un espacio donde los niños aprenden mientras se divierten, desarrollando su curiosidad y habilidades.",
      },
      {
        image: Atomo,
        title: "Exploradores del Saber",
        description:
          "Herramienta interactiva que fomenta el aprendizaje creativo y el descubrimiento en los niños.",
      },
    ],
    young: [
      {
        image: ConsolaJuegos,
        title: "Sistema Integral de Gestión Educativa",
        description:
          "SkillConnect es una plataforma educativa orientada a mejorar los procesos de las instituciones, docentes, padres de familia y alumnos.",
      },
      {
        image: PalancaMando,
        title: "Aprende desde cualquier lugar",
        description:
          "Nuestra plataforma te permite acceder a contenidos educativos desde cualquier dispositivo, fomentando la educación a distancia.",
      },
      {
        image: Espada,
        title: "Plataforma para Jóvenes",
        description:
          "Accede a contenido interactivo y mejora tus habilidades de manera divertida y moderna.",
      },
    ],
    adult: [
      {
        image: Fuente,
        title: "Sistema Integral de Gestión Educativa",
        description:
          "SkillConnect es una plataforma educativa orientada a mejorar los procesos de las instituciones, docentes, padres de familia y alumnos.",
      },
      {
        image: Gestion,
        title: "Aprende desde cualquier lugar",
        description:
          "Nuestra plataforma te permite acceder a contenidos educativos desde cualquier dispositivo, fomentando la educación a distancia.",
      },

      {
        image: Usuario,
        title: "Plataforma para Jóvenes",
        description:
          "Accede a contenido interactivo y mejora tus habilidades de manera divertida y moderna.",
      },
    ],
  };
  const slides = slidesVariants[variant] || slidesVariants.default;
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Configurar avance automático
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); // Avanzar al siguiente slide
    }, 5000); // Cambia el slide cada 5 segundos

    return () => {
      clearInterval(interval); // Limpiar el intervalo al desmontar el componente
    };
  }, [slides.length]); // Reconfigura el intervalo si cambia la longitud de slides

  return (
    <div
        className={`relative w-full overflow-hidden z-10 ${slideBackground} h-[500px]`}
    >
      <div
        className="flex transition-transform duration-1000 ease-in-out items-center h-[400px]"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 flex justify-center">
            <div className="flex flex-col md:flex-row justify-center gap-8 p-4 w-11/12 md:w-3/5 h-auto items-center">
              <motion.img
                src={slide.image}
                alt={slide.title || "Slide"}
                className="w-1/3 max-w-sm object-contain"
                animate={
                  currentVariant === "kids"
                    ? {
                        scale: [1, 1.1, 1],
                        rotate: [0, 10, -10, 0],
                      }
                    : currentVariant === "young"
                    ? {
                        x: [-10, 10, -10],
                        y: [0, -10, 10, 0],
                      }
                    : currentVariant === "adult"
                    ? {
                        opacity: [1, 0.8, 1],
                        scale: [1.2, 0.9, 1.2],
                      }
                    : {
                        // Animaciones para default
                        opacity: [1, 0.8, 1],
                        scale: [1.2, 0.9, 1.2],
                      }
                }
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div
                className={`text-center md:text-left flex flex-col items-center md:items-start justify-center h-full ${fontClass}`}
              >
                <h3 className={`text-4xl font-bold mb-4 ${colortext}`}>
                  {slide.title}
                </h3>
                <p className={`mb-6 ${colortext}`}>{slide.description}</p>
                <div className="flex justify-center md:justify-start gap-4">
                  <button
                    className={`px-3 py-2 rounded-3xl transition-all ease-in-out duration-300 ${buttonClass}`}
                  >
                    Nuestro Facebook
                  </button>
                  <button
                    className={`px-3 py-2 rounded-3xl transition-all ease-in-out duration-300 ${buttonClass}`}
                  >
                    Contáctenos
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600"
      >
        ❯
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-blue-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
