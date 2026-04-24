
import Logo from '../assets/Icons/Logo-White.svg';
import LogoGamer from '../assets/Icons/Logo-gamer.svg';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import LogoKids from "../assets/Icons/Logo-Kids.svg"

// Configuración de estilos para cada variante
const pageStyles = {
  default: {
    logo: Logo,
    fontClass: "font-sans",
    textSize: "text-sm font-semibold",
    titleSize: "text-lg font-bold",
    bgColor: "bg-blue-950",
  },
  young: {
    logo: LogoGamer,
    fontClass: "font-arcade",
    textSize: "text-xs font-medium",
    titleSize: "text-md font-bold text-yellow-500",
    bgColor: "bg-black/90",
  },
  kids: {
    logo: LogoKids,
    fontClass: "font-bubblegum",
    bgColor: "bg-[#800080]/70",
    textSize: "text-xs font-medium",
    titleSize: "text-lg font-bold text-yellow-500",
  },
  adult: {
    logo: Logo,
    fontClass: "font-bree",
    textSize: "text-xs font-medium",
    titleSize: "text-lg font-bold text-yellow-500",
    bgColor: "bg-black/90",
  },
};

export default function Footer({ variant = "default" }) {
  // Obtener estilos dinámicos según la variante
  const { logo, textSize, titleSize, fontClass, bgColor } = pageStyles[variant];

  return (
    <footer className={`text-white py-12 ${fontClass} ${bgColor}`}>
      <div className="container mx-auto px-4 border-t border-gray-700">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <img src={logo} alt="SkillConnect Logo" className="h-1/6 w-1/6" />
        </div>

        {/* Redes Sociales */}
        <div className="flex justify-center space-x-4 mb-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Sección de columnas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left w-full">
          <div>
            <h3 className={`mb-4 ${titleSize}`}>Contáctanos</h3>
            <ul className="space-y-2">
              <li><a href="#!" className="hover:text-gray-300">Centro de ayuda</a></li>
              <li><a href="#!" className="hover:text-gray-300">Reportar problema</a></li>
            </ul>
          </div>
          <div>
            <h3 className={`mb-4 ${titleSize}`}>Términos y Condiciones</h3>
            <ul className="space-y-2">
              <li><a href="#!" className="hover:text-gray-300">Descripción del servicio</a></li>
              <li><a href="#!" className="hover:text-gray-300">Información legal</a></li>
            </ul>
          </div>
          <div>
            <h3 className={`mb-4 ${titleSize}`}>Acerca de Nosotros</h3>
            <ul className="space-y-2">
              <li><a href="#!" className="hover:text-gray-300">¿Qué es SkillConnect?</a></li>
            </ul>
          </div>
          <div>
            <h3 className={`mb-4 ${titleSize}`}>Información</h3>
            <ul className="space-y-2">
              <li><a href="#!" className="hover:text-gray-300">Blog</a></li>
              <li><a href="#!" className="hover:text-gray-300">Noticias</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-8">
          <h3 className={`text-center mb-4 ${titleSize}`}>
            ¡Suscríbete a nuestro newsletter!
          </h3>
          <form className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0">
            <input
              type="email"
              placeholder="Ingresa tu correo"
              className="px-4 py-2 text-gray-800 rounded-lg focus:outline-none w-full md:w-auto"
            />
            <button
              type="submit"
              className="ml-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500"
            >
              Suscribirme
            </button>
          </form>
        </div>

        {/* Derechos Reservados */}
        <div className="mt-8 border-t border-gray-00 pt-4 text-center text-sm text-gray-400">
          © 2024 SkillConnect. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
