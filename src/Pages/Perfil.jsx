import React from "react";
import { useSearchParams } from "react-router-dom";

import Header from "../Components/Header"; // Importa el Header
import Profile from "../Components/Profile"; // Importa el Profile

const designs = {
    default: { bgColor: "bg-gray-100", textColor: "text-gray-800" },
    kids: { bgColor: "bg-yellow-200", textColor: "text-yellow-800" },
    young: { bgColor: "bg-pink-100", textColor: "text-pink-700" },
    adult: { bgColor: "bg-gray-800", textColor: "text-white" },
  };
export default function Perfil() {
  const [searchParams] = useSearchParams();
  const variant = searchParams.get("variant") || "default"; // Obtiene el parámetro 'variant' de la URL

    // Determinar el fondo dinámico según la variante
    const backgroundClass =
    variant === "young"
      ? "bg-gradient-to-b from-[#000080]/90 to-[#3533cd]/100" // Adolescente
      : variant === "kids"
      ? "bg-gradient-to-b from-[#5de0e6] to-[#004aad]" // Niños
      : variant === "adult"
      ? "bg-gradient-to-r to-[#0b583b]/100 from-[black]" // Adulto 
      : "bg-gradient-to-b from-[#000000]/100 to-[#EA6558]/100"; // Predeterminado

  return (
    <div className={`${backgroundClass}`} >
      {/* Header con la variante dinámica */}
      <Header variant={variant} />
      {/* Profile con la misma variante */}
      <Profile variant={variant} />
    </div>
  );
}

