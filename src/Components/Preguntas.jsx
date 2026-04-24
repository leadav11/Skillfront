import { useState } from "react";

// Configuración de estilos para cada variante
const pageStyles = {
  default: {
    fontClass: "font-sans ",
    textSize: " text-sm font-semibold ",
    titleSize: "text-3xl font-bold",
    titleColor:"text-white",
    subtitleStile:"text-white font-medium",
    describeColor: "text-sm text-white",
    colorButtom: "bg-[#daaa00] text-[#0c2340] py-2 px-5 rounded-md hover:bg-yellow-600 transition duration-300 ease-in-out",
    colorNameForm: "text-white",
    /* bg-[#FFD700] text-[#0c2340] font-bold shadow-lg hover:bg-[#FFC700] border-[#FFD700]" */
  },
  young: {
    fontClass: "font-arcade",
    titleColor:"text-yellow-300",
    subtitleStile:"",
    textSize: " text-xs font-normal ",
    titleSize: " text-md font-bold",
    colorNameForm: "text-white",
    
  },
  kids: {
    fontClass: "font-bubblegum",
    titleColor:"text-purple-500 text-6xl font-bold mt-8 ",
    subtitleStile:"text-white font-bold tracking-wide ",
    describeColor: "text-white text-bold text-md ",
    textSize: " text-xl font-normal ",
    titleSize: " text-xl font-bold",
    colorButtom: "bg-purple-500 text-black py-2 px-5 rounded-md hover:bg-purple-600 transition duration-300 ease-in-out",
    colorNameForm: "text-black",
  },
  adult: {
    fontClass: "font-bree",
    titleColor:"text-white",
    subtitleStile:"text-white font-bold",
    describeColor: "text-[#e4ebbc]-100 text-bold text-md",
    textSize: " text-xl font-normal ",
    titleSize: " text-xl font-bold",
    colorButtom: "bg-[#dda100] text-white py-2 px-5 rounded-md hover:bg-yellow-500 transition duration-300 ease-in-out",
  },
};

export default function Preguntas({ variant = "default" }) {
  // Obtener estilos dinámicos según la variante
  const { textSize, titleSize, fontClass, titleColor, subtitleStile, describeColor, colorButtom, colorNameForm } = pageStyles[variant];

  const [activeIndex, setActiveIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setError("Todos los campos son requeridos.");
    } else {
      setError("");
      // Aquí puedes agregar la lógica para enviar el formulario.
      alert("Formulario enviado con éxito!");
    }
  };

  const faqs = [
    {
      question: "¿Cómo puedo registrarme en SkillConnect?",
      answer:
        "Puedes registrarte de forma gratuita ingresando tu correo electrónico y una contraseña en nuestra página de registro. También puedes vincular tu cuenta de Google para mayor comodidad.",
    },
    {
      question: "¿Cómo puedo acceder a los cursos que compré?",
      answer:
        "Una vez que compres un curso, estará disponible en la sección 'Mis Cursos' dentro de tu perfil. Podrás acceder al contenido en cualquier momento desde tu cuenta.",
    },
    {
      question: "¿Qué beneficios obtengo al completar un curso?",
      answer:
        "Al completar un curso, recibirás un certificado avalado por SkillConnect",
    },
    {
      question: "¿Ofrecen becas en los cursos?",
      answer:
        "Sí, contamos con becas parciales. También ofrecemos planes accesibles para estudiantes. Consulta nuestra sección de 'Becas' para más información.",
    },
    {
      question: "¿Cómo puedo hacer seguimiento de mi progreso?",
      answer:
        "Tu progreso se actualizará automáticamente y estará visible en tu perfil. También recibirás notificaciones de hitos importantes como lecciones completadas y logros obtenidos.",
    },
  ];

  return (
    <div
      className={`min-h-screen p-8 flex flex-col items-center ${fontClass} ${titleColor}`}
    >
      {/* TÍTULO */}
      <h1 className="text-4xl font-bold mb-10 relative">Preguntas frecuentes</h1>

      {/* Contenedor principal con dos columnas */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-4 sm:px-6 ${titleSize}`}
      >
        {/* Columna de cuadro de Preguntas */}
        <div className="space-y-7">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-100 text-gray-800 rounded-md shadow-md p-4 transition-transform transform duration-300 ease-in-out hover:scale-105"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <p className="text-lg font-medium">{faq.question}</p>
                <button
                  className="text-xl font-bold text-gray-600 transition-transform transform duration-300 ease-in-out hover:scale-110"
                  aria-label="Toggle Answer"
                >
                  {activeIndex === index ? (
                    <span className="text-gray-700">-</span>
                  ) : (
                    <span className="text-gray-700">+</span>
                  )}
                </button>
              </div>
              <p
                className={`mt-2 text-sm text-gray-700 transition-max-height duration-300 ${
                  activeIndex === index
                    ? "max-h-40"
                    : "max-h-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Columna del Formulario */}
        <div className={`text-white mt-10 md:mt-0 ${textSize}`}>
          <h2 className={`text-2xl mb-4 text-center ${subtitleStile}`}>
            ¿Tienes alguna otra pregunta?
          </h2>
          <p className={` mb-6 text-center ${describeColor}`}>
            Nos encantaría resolver tus dudas.
          </p>
          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="text-red-500 text-center">{error}</div>
            )}
            <div>
              <label className={` block text-sm font-normal mb-2 ${colorNameForm}`}>Nombre completo</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 bg-slate-100 text-gray-800 transition duration-300 ease-in-out hover:border-red-400 focus:ring-2 focus:ring-red-500"
                placeholder="Ingresa tu nombre"
              />
            </div>

            <div>
              <label className={` block text-sm font-normal mb-2 ${colorNameForm}`}>Correo electrónico</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 bg-slate-100 text-gray-800 transition duration-300 ease-in-out hover:border-red-400 focus:ring-2 focus:ring-red-500"
                placeholder="Ingresa tu correo"
              />
            </div>

            <div>
              <label className={` block text-sm font-normal mb-2 ${colorNameForm}`}>Mensaje</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full border border-gray-300 rounded-md p-2 bg-slate-100 text-gray-800 transition duration-300 ease-in-out focus:border-red-500 focus:ring-1 focus:ring-red-500"
                placeholder="Escribe tu mensaje"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className={`${colorButtom}`}
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
