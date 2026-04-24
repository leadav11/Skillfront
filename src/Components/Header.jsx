import logo from "../assets/Icons/Logo-White-mobil.svg";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";
import leadav from '.././assets/Images/Lea.png';


export default function Header({ variant }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Simulando autenticación
  const [racha, setRacha] = useState("¡Sigue así!"); // Racha inicial
  const [showProfile, setShowProfile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Datos simulados del usuario
  const userData = {
    image:{leadav},
    username: "Leadev",
    name: "Leandro",
    lastName: "Portocarrero",
    email: "leaportocarrerocruz@gmail.com",
  };

  useEffect(() => {
    const rachaMessages = ["¡Sigue así!", "¡Impresionante!", "¡Vas muy bien!", "¡Continúa así!"];
    const interval = setInterval(() => {
      const randomMessage =
        rachaMessages[Math.floor(Math.random() * rachaMessages.length)];
      setRacha(randomMessage);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const designs = {
    default: {
      fontClass: "font-semibold text-xl",
      buttonClass: "bg-yellow-500 text-white hover:bg-yellow-600",
      hoverTextClass: "hover:text-yellow-500",
      colortext: "text-white",
      bgProfile: "bg-white",
      icon: logo,
    },
    kids: {
      fontClass: "font-bubblegum text-2xl font-bold tracking-wider", 
      buttonClass: "bg-[#F8D642] hover:bg-[#ffe471]", 
      hoverTextClass: "text-white hover:text-pink-400  ",
      colortext:"text-white text-xl hover:text-pink-400",
      emailColor:"text-gray-700",
      icon:logo,
      profileFontSize: "text-sm", // Tamaño de letra más pequeño para perfil
      fondoHeader: "",
      bgProfile:" bg-blue-300/70",
      },
    young: {
      fontClass: "font-arcade text-xs text-pink-600",
      buttonClass: "bg-[#ff0068] text-white hover:bg-blue-700",
      hoverTextClass: "hover:text-[#ff0068]",
      colortext: "text-yellow-500 text-shadow-neon animate-neon",
      emailColor: "text-gray-400 text-[9px] font-bold mt-2",
      icon: logo,
      bgResponsive: "bg-black/50",
      bgProfile: "bg-blue-600/20",
    },
    adult: {
      fontClass: "font-bree text-xl",
      buttonClass:
        "bg-yellow-600 text-white hover:bg-yellow-500 hover:scale-110 duration-500 transition-transform focus:ring-indigo-300 rounded-lg px-6 py-2",
      hoverTextClass: "hover:text-[white]",
      colortext: "text-yellow-500",
      emailColor: "text-white",
      icon: logo,
      bgProfile: "bg-black/30",
      bgResponsive: "bg-black/70",
    },
  };

  const currentDesign = designs[variant] || designs.default;
  const {
    fontClass,
    buttonClass,
    hoverTextClass,
    colortext,
    emailColor,
    icon,
    bgProfile,
    bgResponsive,
  } = currentDesign;

  const dynamicPath = (path) => `${path}${variant ? `?variant=${variant}` : ""}`;

  return (
    <header className={`flex flex-col md:flex-row items-center justify-between px-5 py-3 md:py-5 z-50 ${fontClass} ${isMenuOpen ? bgResponsive : ""}`}>
      {/* Logo y Toggle Menu */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img src={icon} alt="Logo" className="h-8 md:h-10" />
          </Link>
          <Link className={`font-bold text-base ${colortext}`} to="/">
            SkillConnect
          </Link>
        </div>

        {/* Botón del menú responsive */}
        <button
          className="text-white md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col md:flex-row md:flex md:items-center space-y-2 md:space-y-0 md:space-x-6 text-white mt-4 md:mt-0`}
      >
        <Link
          to={dynamicPath("/")}
          className={`transition-transform duration-500 ${hoverTextClass}`}
        >
          Home
        </Link>
        <Link
          to={dynamicPath("/cursos")}
          className={`transition-transform duration-500 ${hoverTextClass}`}
        >
          Cursos
        </Link>
        <Link
          to={dynamicPath("/beca")}
          className={`transition-transform duration-500 ${hoverTextClass}`}
        >
          Becas
        </Link>
        <Link
          to={dynamicPath("/planes")}
          className={`transition-transform duration-500 ${hoverTextClass}`}
        >
          Planes
        </Link>
      </nav>

      {/* Search Bar and Buttons */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col md:flex-row md:flex md:items-center space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0`}
      >
        <div className="relative w-full md:w-auto">
          <input
            type="text"
            placeholder="Buscar...."
            className="w-full md:w-[15rem] rounded-full border border-gray-300 px-4 py-2 text-black focus:outline-none focus:ring-2"
          />
        </div>

        {!isAuthenticated ? (
          <>
            <Link
              to={dynamicPath("/Login")}
              className={`px-4 py-2 rounded-full transition-transform duration-500 text-white ${hoverTextClass}`}
            >
              Iniciar Sesión
            </Link>
            <Link
              to={dynamicPath("/Register")}
              className={`px-4 py-2 rounded-full transition-transform duration-500 ${buttonClass}`}
            >
              Registrarse
            </Link>
          </>
        ) : (


          <div className="flex items-center space-x-4">
            <Link to={dynamicPath("/carrito")}> 
              <span className="text-white text-xl">
                <i className="fa fa-shopping-cart"></i>
              </span>
            </Link>
            <div className={`text-white flex items-center space-x-2`}>
              <i className="fa fa-trophy text-yellow-500 p-2"></i>
              <span className="text-yellow-500 font-bold">{racha}</span>
            </div>


            <div className="relative ">
              <button
                className="flex items-center space-x-2 text-white hover:text-yellow-500"
                onClick={() => setShowProfile(!showProfile)}
              >
                <img
                  src={leadav}
                  alt="Usuario"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                />
                <span>{userData.username}</span>
              </button>
              {showProfile && (
                <div
                  className={`${bgProfile} absolute top-12 right-0 p-4 shadow-lg rounded-lg w-56 z-50`}
                >
                  <div className="flex flex-col items-center">
                    <img
                      src={leadav}
                      alt="Usuario"
                      className="w-16 h-16 rounded-full mb-2 object-cover"
                    />
                    <div className="text-center">
                      <div className={`font-semibold ${colortext}`}>
                        {userData.name} {userData.lastName}
                      </div>
                      <div className={`text-sm ${emailColor}`}>
                        {userData.email}
                      </div>
                    </div>
                    <div className="mt-4 space-y-2 w-full">
                      <Link
                        to={dynamicPath("/Perfil")}
                        className="block text-center py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                      >
                        Ver Perfil
                      </Link>
                      <button
                        className="block w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
                        onClick={() => {
                          setIsAuthenticated(false);
                          setShowProfile(false);
                        }}
                      >
                        Cerrar Sesión
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
