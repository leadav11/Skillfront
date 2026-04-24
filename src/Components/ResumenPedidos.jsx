import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa"; // Asegúrate de importar el icono de la X
import { useSearchParams } from "react-router-dom"; // Necesario para obtener los parámetros de búsqueda

const ResumenPedidos = () => {
  const [cartItems, setCartItems] = useState([]);

  // Cargar los cursos almacenados al cargar el componente
  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCourses);
  }, []);

  // Función para calcular el total
  const getTotal = () => {
    const total = cartItems.reduce((total, course) => {
      const price = parseFloat(course.price); // Convertir a número
      if (!isNaN(price)) {
        return total + price; // Solo sumamos si price es un número válido
      }
      return total;
    }, 0);

    return total.toFixed(2); // Retorna el total con dos decimales
  };

  // Función para eliminar un curso del carrito
  const removeCourse = (courseId) => {
    const updatedCart = cartItems.filter((course) => course.id !== courseId);
    setCartItems(updatedCart); // Actualizamos el estado del carrito
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Actualizamos en localStorage
  };

  // Obtenemos el parámetro 'variant' desde la URL
  const [searchParams] = useSearchParams();
  const variant = searchParams.get("variant") || "default"; // Si no hay parámetro, se usa "default"

  // Estilos según la variante
  const varianteStyles = {
    default: {
      cardBgColor: "bg-white/70",
      textColor: "text-black",
      buttonColor: "bg-yellow-600 hover:bg-yellow-500",
      titleSize: "text-3xl font-bold",
      priceColor: "text-lg",
      totalFont: "font-bold text-1xl text-black", // Estilo para el total
      buttonFont: "text-lg font-bold", // Estilo para el botón
    },
    kids: {
      cardBgColor: "bg-white/60",
      textColor: "text-gray-800",
      buttonColor: "bg-yellow-400 hover:bg-yellow-60",
      titleSize: "text-2xl font-comics",
      priceColor: "text-lg font-comics",
      totalFont: "font-comics text-1xl text-yellow-800", // Estilo para el total
      buttonFont: "text-lg font-comics", // Estilo para el botón
    },
    young: {
      cardBgColor: "bg-black/50",
      textColor: "text-white",
      buttonColor: "bg-pink-700 hover:bg-pink-500",
      titleSize: "text-2xl text-yellow-500 font-arcade",
      priceColor: "text-sm text-green-500 font-arcade",
      totalFont: "text-1xl font-arcade text-yellow-500", // Estilo para el total
      buttonFont: "text-lg font-arcade", // Estilo para el botón
      title: "text-1xl font-arcade text-yellow-500",
    },
    adult: {
      cardBgColor: "bg-[#e8f5e9]/70",
      textColor: "text-gray-800",
      buttonColor: "bg-green-800 hover:bg-green-700",
      titleSize: "text-2xl font-bree",
      priceColor: "text-lg font-bree",
      totalFont: "text-1xl font-bree text-black", // Estilo para el total
      buttonFont: "text-lg font-bree", // Estilo para el botón
    },
  };

  const styles = varianteStyles[variant] || varianteStyles.default;

  return (
    // ⬇️ Aquí se agregó flex-col y md:flex-row para hacerlo responsive
    <div className={`flex flex-col md:flex-row w-full p-6 gap-4 relative`}>
      {/* Contenedor principal con fondo difuso y blanco con opacidad */}
      <div className="absolute inset-0 bg-white bg-opacity-30 backdrop-blur-lg z-[-1]"></div>

      {/* Contenedor de los cursos */}
      <div className={`w-full md:w-4/5 p-6 rounded-lg shadow-lg z-10 ${styles.cardBgColor} ${styles.textColor}`}>
        <h3 className={`${styles.titleSize} mb-4`}>Resumen de tu pedido</h3>
        {cartItems.length === 0 ? (
          <p>No hay cursos en el carrito.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between mt-4 items-center">
                <div className="flex items-center gap-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <span className="text-lg">{item.title}</span>
                </div>
                <div className="flex items-center">
                  <span className={`text-lg ${styles.priceColor}`}>
                    ${parseFloat(item.price).toFixed(2)}
                  </span>
                  <button
                    onClick={() => removeCourse(item.id)}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>
            ))}
            <hr className="my-4" />
          </div>
        )}
      </div>

      {/* Contenedor del precio y el botón */}
      <div className={`w-full md:w-1/5 p-6 rounded-lg shadow-lg z-10 ${styles.cardBgColor} ${styles.textColor}`}>
        <div className="flex flex-col justify-between h-full">
          <div className="flex justify-between text-lg mb-4">
            <span className={`${styles.totalFont}`}>Total:</span>
            <span className={`${styles.totalFont}`}>${getTotal()}</span>
          </div>
          <button
            className={`${styles.buttonColor} ${styles.buttonFont} text-white px-4 py-2 rounded mt-4 w-full hover:bg-blue-700 transition duration-300`}
          >
            Finalizar compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumenPedidos;
