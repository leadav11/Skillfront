import Header from "../Components/Header";
import TarjetPlanes from "../Components/TarjetPlanes";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Anuncio3D from "../assets/Images/anuncio.svg";
import Cohete3D from "../assets/Images/cohete.svg";
import Cubo3D from "../assets/Images/cubo.svg";
import Libro3D from "../assets/Images/libro.svg";
import Mandoblue from "../assets/Images/mando-neonblue.svg";
import Mandored from "../assets/Images/mando-neonred.svg";
import Sup from "../assets/Icons/Superior.svg"; // Importar la imagen SVG

export default function Planes() {
  const location = useLocation();

  // Obtener el parámetro "variant" de la URL
  const params = new URLSearchParams(location.search);
  const variant = params.get("variant") || "default"; // Por defecto, usa "default"

  // Determinar el fondo dinámico según la variante
  const backgroundClass =
    variant === "young"
      ? "bg-gradient-to-b from-[#000000]/90 to-[#3533cd]/100 min-h-screen" // Adolescente
      : variant === "kids"
      ? "bg-gradient-to-b from-purple-800 to-purple-400 " // Niños
      : variant === "adult"
      ? "bg-gradient-to-l from-[#042518]/95 to-[#0d6242]/100" // Adulto (Fondo Verde)
      : "bg-gradient-to-t from-[#223a76]/100 to-[#686ebf]/100"; // Predeterminado

  // Estilo de fondo adicional solo para el `variant` "default"
  const defaultStyle = variant === "default" ? {
    backgroundImage: `url(${Sup})`,
    backgroundSize: 'cover', // Ajusta el tamaño de la imagen
    backgroundPosition: 'rigth' // Centra la imagen
  } : {};

  return (
    <div
      className={`${backgroundClass} min-h-screen`}
      style={defaultStyle}
    >
      {/* Pasar el `variant` como prop */}
      <Header variant={variant} />
      <TarjetPlanes variant={variant} />

      {/* Agregar los SVGs al fondo según la variante */}
      {variant === "kids" && (
        <>
          <motion.img
            src={Anuncio3D}
            alt="Anuncio"
            className="absolute top-24 left-[10%] sm:left-[20%] md:left-[30%] w-[15%] h-auto opacity-90"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.img
            src={Cohete3D}
            alt="Cohete"
            className="absolute top-1/4 right-[5%] sm:right-[10%] md:right-[15%] w-[12%] h-auto opacity-90"
            animate={{
              y: [0, 20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.img
            src={Cubo3D}
            alt="Cubo"
            className="absolute top-32 right-[10%] sm:right-[15%] md:right-[20%] w-[10%] h-auto opacity-90"
            animate={{
              x: [0, 15, -15, 0],
              rotate: [0, 20, -20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </>
      )}

      {variant === "young" && (
        <>
          <motion.img
            src={Mandoblue}
            alt="Mando Azul"
            className="absolute top-[20%] left-[60%] sm:left-[70%] md:left-[75%] w-[12%] h-auto opacity-90"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.img
            src={Mandored}
            alt="Mando Rojo"
            className="absolute top-[20%] left-[5%] sm:left-[10%] md:left-[15%] w-[12%] h-auto opacity-90"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </>
      )}
    </div>
  );
}
