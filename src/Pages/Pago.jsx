import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../Components/Header";
import ResumenPedidos from "../Components/ResumenPedidos";
import CourseCard from "../Components/CourseCard";
import { kidsCourses, teensCourses, adultsCourses, defaultCourses } from "./Features";

export default function Pago() {
  const [searchParams] = useSearchParams();
  const variant = searchParams.get("variant") || "default";

  const variantStyles = {
    kids: {
      bgClass: "bg-gradient-to-b from-[#86DCFC] to-[#b3e5fc]",
      courses: kidsCourses,
    },
    young: {
      bgClass: "bg-gradient-to-b from-[#000000]/90 to-[#3533cd]/100",
      courses: teensCourses,
    },
    adult: {
      bgClass: "bg-gradient-to-r to-[#0b583b]/100 from-[black]",
      courses: adultsCourses,
    },
    default: {
      bgClass: "bg-gradient-to-b from-[#000000]/100 to-[#EA6558]/100",
      courses: defaultCourses,
    },
  };

  const currentStyle = variantStyles[variant] || variantStyles.default;

  const [cursosSeleccionados, setCursosSeleccionados] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cursosSeleccionadosTemp = currentStyle.courses.filter((curso) => curso.seleccionado);
    const totalTemp = cursosSeleccionadosTemp.reduce((total, curso) => total + curso.precio, 0);
    setCursosSeleccionados(cursosSeleccionadosTemp);
    setTotal(totalTemp.toFixed(2));
  }, [currentStyle.courses]);

  return (
    <div className={`min-h-screen text-white ${currentStyle.bgClass}`}>
      <Header variant={variant} />
      <div className="p-5">
        <h1 className="text-center text-xl mb-5">{currentStyle.title}</h1>
        
        {/* Componente de ResumenPedido con la función para actualizar el total */}
        <ResumenPedidos 
          total={setTotal} 
          setCursosSeleccionados={setCursosSeleccionados}
          cursosSeleccionados={cursosSeleccionados} 
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          {cursosSeleccionados.map((curso) => (
            <CourseCard
              key={curso.id}
              id={curso.id}
              titulo={curso.titulo}
              precio={curso.precio}
              imagen={curso.imagen}
              url={curso.url}
            />
          ))}
        </div>
        
      </div>
    </div>
  );
}
