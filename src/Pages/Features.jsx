import React from "react";
import { useLocation } from "react-router-dom";
import CoursesGrid from "../Components/CoursesGrid";
import Header from '../Components/Header'
import RoutePage from '../Components/RoutePage'
import Cur from "../assets/Icons/Lado.svg"
/* import CourseDetails from '../Components/CourseDetails' */

export const kidsCourses = [
  {
    id: 1, // Rango de id para kids
    title: "Introducción a la programación",
    description: "Aprende los fundamentos de programación con juegos interactivos.",
    image: "https://static.vecteezy.com/system/resources/thumbnails/002/871/498/small/concept-of-computer-technology-for-education-and-business-vector.jpg",
    level: "Principiante",
    tags: ["programación", "niños"],
    price: "9.99",
    rating: 4.5,
    students: 20,
    videoUrl: "https://www.youtube.com/embed/VZe9tjqa9xw",
  },
  {
    id: 2,
    title: "Scratch básico",
    description: "Crea tus primeros proyectos con este lenguaje visual.",
    image: "https://cdn.worldvectorlogo.com/logos/scratch-logo.svg",
    level: "Principiante",
    tags: ["Scratch", "niños"],
    price: "8.99",
    rating: 4.7,
    students: 15,
    videoUrl: "https://www.youtube.com/embed/ykjMlW5LfM4",
  },
  {
    id: 3,
    title: "Lógica computacional",
    description: "Desarrolla habilidades de resolución de problemas.",
    image: "https://via.placeholder.com/300x140?text=Logic+for+Kids",
    level: "Intermedio",
    tags: ["lógica", "pensamiento crítico"],
    price: "10.99",
    rating: 4.6,
    students: 18,
    videoUrl: "https://www.youtube.com/embed/dgdg64cQmm8",
  },
  {
    id: 4,
    title: "Robótica para niños",
    description: "Aprende a programar robots sencillos para desarrollar tus habilidades lógicas.",
    image: "https://via.placeholder.com/300x140?text=Robotics+for+Kids",
    level: "Principiante",
    tags: ["Robótica", "programación"],
    price: "12.99",
    rating: 4.8,
    students: 10,
    videoUrl: "https://www.youtube.com/embed/kD8RhGi2e6k",
  },
  {
    id: 5,
    title: "Juego con Python para niños",
    description: "Crea tus propios juegos sencillos utilizando Python.",
    image: "https://via.placeholder.com/300x140?text=Python+Games+for+Kids",
    level: "Principiante",
    tags: ["Python", "niños", "juegos"],
    price: "14.99",
    rating: 4.7,
    students: 30,
    videoUrl: "https://www.youtube.com/embed/TwK9vH0wRP4",
  }
];

export const teensCourses = [
  {
    id: 31,
    title: "Python para principiantes",
    description: "Aprende a programar con Python desde cero.",
    image: "https://www.svgrepo.com/show/452091/python.svg",
    level: "Principiante",
    tags: ["Python", "teens"],
    price: "14.99",
    rating: 4.8,
    students: 25,
    videoUrl: "https://www.youtube.com/embed/29S-rUkmwoQ",  // Video actualizado
  },
  {
    id: 32,
    title: "JavaScript interactivo",
    description: "Crea páginas web dinámicas con JavaScript.",
    image: "https://www.svgrepo.com/show/349419/javascript.svg",
    level: "Intermedio",
    tags: ["JavaScript", "web"],
    price: "19.99",
    rating: 4.7,
    students: 18,
    videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk",  // Ya funcionaba
  },
  {
    id: 33,
    title: "Desarrollo de videojuegos",
    description: "Diseña y programa tu propio videojuego.",
    image: "https://www.svgrepo.com/show/288643/game-console.svg",
    level: "Avanzado",
    tags: ["videojuegos", "programación"],
    price: "24.99",
    rating: 4.9,
    students: 12,
    videoUrl: "https://www.youtube.com/embed/lKzEvbGbbPo",  // Video actualizado
  },
  {
    id: 34,
    title: "Introducción a C++",
    description: "Aprende a programar en C++ desde cero.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png",
    level: "Principiante",
    tags: ["C++", "teens"],
    price: "16.99",
    rating: 4.6,
    students: 20,
    videoUrl: "https://www.youtube.com/embed/VQo6gj7-hw8", // Video actualizado
  },
  {
    id: 35,
    title: "Aplicaciones móviles",
    description: "Desarrolla tus propias aplicaciones para Android e iOS.",
    image: "https://www.svgrepo.com/show/475631/android-color.svg",
    level: "Intermedio",
    tags: ["Aplicaciones móviles", "Android", "iOS"],
    price: "29.99",
    rating: 4.7,
    students: 15,
    videoUrl: "https://www.youtube.com/embed/3_dwKqCsbis", // Video actualizado
  }
];


export const adultsCourses = [
  {
    id: 61, // Rango de id para adults
    title: "Fundamentos de desarrollo web",
    description: "Aprende HTML, CSS y JavaScript para construir páginas web.",
    image: "https://via.placeholder.com/300x140?text=Web+Dev+for+Adults",
    level: "Principiante",
    tags: ["HTML", "CSS", "JavaScript"],
    price: "19.99",
    rating: 4.5,
    students: 30,
    videoUrl: "https://www.youtube.com/embed/pQN-pnP7d4U",
  },
  {
    id: 62,
    title: "Introducción a React.js",
    description: "Construye aplicaciones modernas con React.",
    image: "https://via.placeholder.com/300x140?text=React+for+Adults",
    level: "Intermedio",
    tags: ["React", "frontend"],
    price: "24.99",
    rating: 4.6,
    students: 22,
    videoUrl: "https://www.youtube.com/embed/JY3RAIbsXjQ",
  },
  {
    id: 63,
    title: "Bases de datos con SQL",
    description: "Administra datos con SQL desde cero.",
    image: "https://via.placeholder.com/300x140?text=SQL+for+Adults",
    level: "Intermedio",
    tags: ["SQL", "databases"],
    price: "21.99",
    rating: 4.7,
    students: 20,
    videoUrl: "https://www.youtube.com/embed/9Pzj7Aj25lw",
  },
  {
    id: 64,
    title: "Desarrollo de aplicaciones con Node.js",
    description: "Aprende a desarrollar aplicaciones backend con Node.js.",
    image: "https://via.placeholder.com/300x140?text=Node.js+for+Adults",
    level: "Intermedio",
    tags: ["Node.js", "Backend", "JavaScript"],
    price: "34.99",
    rating: 4.8,
    students: 18,
    videoUrl: "https://www.youtube.com/embed/fBNz5xF6FYI",
  },
  {
    id: 65,
    title: "Java para aplicaciones empresariales",
    description: "Desarrolla aplicaciones empresariales utilizando Java.",
    image: "https://via.placeholder.com/300x140?text=Java+for+Adults",
    level: "Avanzado",
    tags: ["Java", "Enterprise applications"],
    price: "39.99",
    rating: 4.7,
    students: 15,
    videoUrl: "https://www.youtube.com/embed/UmnCZGRN5Hk",
  }
];

export const defaultCourses = [
  {
    id: 91, // Rango de id para cursos por defecto
    title: "Introducción a la tecnología",
    description: "Explora conceptos básicos sobre tecnología y su impacto en la sociedad.",
    image: "https://via.placeholder.com/300x140?text=Intro+to+Tech",
    level: "Principiante",
    tags: ["tecnología", "básico"],
    price: "9.99",
    rating: 4.5,
    students: 40,
    videoUrl: "https://www.youtube.com/embed/8ZZwO7Xlmvo",
  },
  {
    id: 92,
    title: "Fundamentos de la inteligencia artificial",
    description: "Descubre qué es la IA y cómo se utiliza en el mundo actual.",
    image: "https://via.placeholder.com/300x140?text=Intro+to+AI",
    level: "Intermedio",
    tags: ["IA", "inteligencia artificial"],
    price: "19.99",
    rating: 4.7,
    students: 30,
    videoUrl: "https://www.youtube.com/embed/KdGqHP5WzW4",
  },
  {
    id: 93,
    title: "Cómo crear tu primera página web",
    description: "Aprende los conceptos básicos de HTML y CSS para construir tu página.",
    image: "https://via.placeholder.com/300x140?text=HTML+%26+CSS",
    level: "Principiante",
    tags: ["HTML", "CSS", "web"],
    price: "14.99",
    rating: 4.6,
    students: 50,
    videoUrl: "https://www.youtube.com/embed/UB1O30fR-EE",
  },
  {
    id: 94,
    title: "Seguridad en Internet",
    description: "Conoce cómo proteger tus datos y navegar de forma segura.",
    image: "https://via.placeholder.com/300x140?text=Internet+Security",
    level: "Intermedio",
    tags: ["seguridad", "internet"],
    price: "11.99",
    rating: 4.8,
    students: 25,
    videoUrl: "https://www.youtube.com/embed/aUJj8UeKiVg",
  },
  {
    id: 95,
    title: "Programación con Python: Proyectos prácticos",
    description: "Aplica tus conocimientos de Python en proyectos del mundo real.",
    image: "https://via.placeholder.com/300x140?text=Python+Projects",
    level: "Avanzado",
    tags: ["Python", "proyectos"],
    price: "24.99",
    rating: 4.9,
    students: 15,
    videoUrl: "https://www.youtube.com/embed/gfDE2a7MKjA",
  }
];


// Configuración de estilos dinámicos
const pageStyles = {
  kids: {
    bgColor: "bg-gradient-to-b from-[#5de0e6] to-[#004aad]",
    titleFont: "font-bubblegum text-white text-3xl",
    paragraphFont: "text-blue-100",
    buttonColor: "bg-green-500",
    buttonText: "¡Explorar!",
  },
  young: {
    bgColor: "bg-gradient-to-b from-[#000000]/90 to-[#3533cd]/100",
    titleFont: "font-arcade text-yellow-300 text-4xl",
    paragraphFont: "text-pink-100",
    buttonColor: "bg-yellow-500",
    buttonText: "¡Aprender ahora!",
  },
  adult: {
    bgColor: "bg-gradient-to-r to-[#0b583b]/100 from-[black] max-screen",
    titleFont: "font-bree text-white text-4xl",
    paragraphFont: "text-gray-300",
    buttonColor: "bg-purple-600",
    buttonText: "Inscribirse",
  },
  default: {
    bgColor: "bg-gradient-to-b from-[#000000]/100  to-[#EA6558]/100",
    titleFont: "font-sans text-white text-3xl",
    paragraphFont: "text-gray-300",
    buttonColor: "bg-blue-500",
    buttonText: "Comprar",
  },
};

// Componente principal
export default function Features () {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const variant = params.get("variant") || "default";

  const courses =
    variant === "kids"
      ? kidsCourses
      : variant === "young"
      ? teensCourses
      : variant === "adult"
      ? adultsCourses
      : defaultCourses;

      const defaultStyle = variant === "default" ? {
        backgroundImage: `url(${Cur})`,
        backgroundSize: 'cover', // Ajusta el tamaño de la imagen
        backgroundPosition: 'rigth' // Centra la imagen
      } : {};

  return (
    <div className={`min-h-screen ${pageStyles[variant]?.bgColor || pageStyles.default.bgColor}`}
    style={defaultStyle}
    >
      <Header variant={variant} />
      <RoutePage variant={variant}/>
      <CoursesGrid courses={courses} variant={variant} />
    </div>
  );
};
