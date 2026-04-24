import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Slider from "../Components/Slider";
import TarjetPlanes from "../Components/TarjetPlanes";
import TarjetCurso from "../Components/TarjetaCurso";
import Preguntas from "../Components/Preguntas";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";

// Nuevas importaciones de imágenes SVG
import PilaLibros3D from "../assets/Images/pila-libros.svg";
import Copa3D from "../assets/Images/copa.svg";
import Foco3D from "../assets/Images/foco.svg";
import Lupa3D from "../assets/Images/lupa.svg";

export default function Kids() {
  const location = useLocation();

  // Determinar variante según la ruta
  const variant = location.pathname.includes("/kids")
    ? "kids"
    : location.pathname.includes("/Young")
    ? "young"
    : "default";

  return (
    <div className="bg-gradient-to-b from-[#FFF5BA] to-[#e1aec0]/50 m-0 p-0">
      {/* Video de fondo */}
      <video
        className="absolute w-full h-full object-cover"
        src="src/Videos/VIDEO-FONDO.mp4" // Verifica esta ruta
        autoPlay
        loop
        muted
      ></video>

      {/* Contenido principal */}
      <div className="relative z-10">
        <Header variant={variant} />
        <Slider variant={variant} />
        <TarjetPlanes variant={variant} />
        <TarjetCurso variant={variant} />
        <Preguntas variant={variant} />
        <Footer variant={variant} />

        {/* Animaciones de SVG */}
        <motion.img
          src={PilaLibros3D}
          alt="Pila de Libros"
          className="absolute top-1/4 left-28 h-40"
          animate={{
            x: [0, 20, -20, 0],
            scale: [1, 1.1, 0.9, 1],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.img
          src={Copa3D}
          alt="Copa"
          className="absolute top-1/3 right-10 w-40 h-40"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 20, -20, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.img
          src={Foco3D}
          alt="Foco"
          className="absolute bottom-3/4 right-28  h-48"
          animate={{
            x: [0, 10, -10, 0],
            scale: [1, 1.05, 1],
            rotate: [0, -15, 15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.img
          src={Lupa3D}
          alt="Lupa"
          className="absolute top-1/3 left-5 h-24"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 20, -20, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}
