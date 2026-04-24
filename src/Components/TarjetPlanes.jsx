import { CheckIcon } from "@heroicons/react/20/solid";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Pacman from '../assets/Images/pacman.svg'
import PacmanOrange from '../assets/Images/Pacman-orange .svg'

const tiers = [
  {
    name: "Basico",
    id: "tier-Basico",
    href: "#",
    priceMonthly: "S/.200",
    description:
      "El plan personal perfecto si recién estás empezando a utilizar nuestro producto",
    features: [
      "Acceso a todos los cursos de la plataforma",
      "Disponibilidad 24/7",
      "Rutas personalizadas",
      "Evaluaciones personalizadas",
    ],
    featured: false,
  },
  {
    name: "Golden",
    id: "tier-Golden",
    href: "#",
    priceMonthly: "S/.350",
    description:
      "El plan único para dos personas, invita a un amigo y aprendan juntos.",
    features: [
      "Acceso a todos los cursos de la plataforma",
      "Disponibilidad 24/7",
      "Rutas personalizadas",
      "Evaluaciones personalizadas",
      "Ahorras 50 soles por año",
    ],
    featured: true,
  },
  {
    name: "Premium",
    id: "tier-Premium",
    href: "#",
    priceMonthly: "S/.500",
    description:
      "El plan único para tres personas, invita a un amigo o familiar y aprendan juntos.",
    features: [
      "Acceso a todos los cursos de la plataforma",
      "Disponibilidad 24/7",
      "Rutas personalizadas",
      "Evaluaciones personalizadas",
      "Ahorras 100 soles por año",
    ],
    featured: false,
  },
];

// Configuración centralizada para estilos
const pageStyles = {
  default: {
    fontClass: "font-sans text-base",
    titleClass:
      "text-5xl font-semibold tracking-tight text-yellow-500 sm:text-6xl", // Azul oscuro
    descriptionClass:
      "mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-650 sm:text-xl/8", // Dorado
    cardTextClassFalse: "text-[#0c2340]", // Azul oscuro
    cardTextClassTrue: "text-[#FFD700]", // Dorado
    MoneyTextClassFalse: "text-[#FFD700] text-5xl font-semibold tracking-tight", // Dorado
    MoneyTextClassTrue: "text-white text-5xl font-semibold tracking-tight", // Azul oscuro
    FontSizeYear: "text-sm",
    ColorCheckTrue: "text-[#FFD700]", // Dorado
    ColorCheckFalse: "text-[#0c2340]", // Azul oscuro
    colotButtonTrue: "bg-[#FFD700] text-[#0c2340] font-bold shadow-lg hover:bg-[#FFC700] border-[#FFD700]", // Botón dorado con texto azul oscuro y hover dorado más claro
    colotButtonFalse: "text-white font-bold bg-[#223a76] hover:bg-[#0a1c2f] border-[#0c2340]", // Botón azul oscuro con texto dorado y hover azul más oscuro
  },


  young: {
    fontClass: "font-arcade text-xs",
    titleClass: "text-yellow-400 text-4xl font-bold text-shadow-neon animate-neon",
    descriptionClass:
      "mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-yellow-200 text-sm font-medium",
    cardTextClassFalse: "text-black",
    cardTextClassTrue: "text-yellow-400 ",
    MoneyTextClassFalse: "text-green-800 text-3xl font-semibold tracking-tight",
    MoneyTextClassTrue: "text-white text-3xl font-semibold tracking-tight",
    FontSizeYear: "text-xs",
    ColorCheckTrue: "text-[#ff7f07]",
    ColorCheckFalse: "text-green-700",
    colotButtonTrue: "bg-yellow-600 text-black font-bold shadow-lg hover:bg-yellow-500 ",
    colotButtonFalse: "text-white font-bold bg-green-800 hover:bg-green-700 border-green-700",
  },
  kids: {
    fontClass: "font-bubblegum ",
    titleClass: "text-yellow-400 text-6xl font-bold mt-20 animate-neonOrange",
    descriptionClass:"mx-auto mt-6 max-w-2xl text-pretty text-center text-white text-xl font-medium tracking-wide",
    cardTextClassFalse: "text-black ",
    cardTextClassTrue: "text-yellow-400",
    MoneyTextClassFalse: "text-black text-3xl font-semibold tracking-tight",
    MoneyTextClassTrue: "text-white text-3xl font-semibold tracking-tight",
    FontSizeYear: "text-xs",
    ColorCheckTrue: "text-yellow-400",
    ColorCheckFalse: "text-black",
    colotButtonTrue: "bg-yellow-400 text-black font-bold shadow-lg hover:bg-yellow-600 tracking-wide",
    colotButtonFalse: "bg-purple-400 text-black font-bold shadow-lg hover:bg-purple-500 tracking-wide",
  },
  /* crear adulto */
  adult: {
    fontClass: "font-bree text-xs",
    titleClass: "text-[white] text-4xl font-bold", 
    descriptionClass: "mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-[white]",
    cardTextClassFalse: "text-black",
    cardTextClassTrue: "text-yellow-500",
    MoneyTextClassFalse: "text-green-800 text-3xl font-semibold tracking-tight", 
    MoneyTextClassTrue: "text-white text-3xl font-semibold tracking-tight", 
    FontSizeYear: "text-xs",
    ColorCheckTrue: "text-[yellow]", 
    ColorCheckFalse: "text-green-800",
    colotButtonTrue: "bg-yellow-600 text-black font-bold shadow-lg hover:bg-yellow-500 ",
    colotButtonFalse: "text-white font-bold bg-green-800 hover:bg-green-700 border-green-700",
  },
};

const pageContent = {
  "/planes": {
    title: "Elige el plan adecuado para ti",
    description:
      "Invierte en ti mismo con nuestros planes exclusivos. Accede a cursos 24/7, herramientas personalizadas y todo lo que necesitas para alcanzar tus metas. ¡Elige el tuyo y comienza hoy!",
  },
  default: {
    title: "Bienvenido a SkillConnect",
    description:
      "Explora nuestras opciones de aprendizaje y comienza tu viaje hacia el éxito.",
  },
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export default function TarjetPlanes({ variant = "default" }) {
  // Extraer el contenido dinámico según la ruta actual
  const { title, description } =
    pageContent[location.pathname] || pageContent.default;

  // Obtener los parámetros de la URL
  const params = new URLSearchParams(location.search);

// Detectar la variante según el query parameter "variant" o la ruta
const currentVariant = params.get("variant") || 
  (location.pathname.includes("/Young") ? "young" :
  location.pathname.includes("/adult") ? "adult" :
  location.pathname.includes("/kids") ? "kids" : "default"); // Usar "default" si no hay coincidencia


  // Obtener los estilos dinámicos según la variante
  const {
    fontClass,
    titleClass,
    descriptionClass,
    cardTextClassFalse,
    cardTextClassTrue,
    MoneyTextClassFalse,
    MoneyTextClassTrue,
    FontSizeYear,
    ColorCheckFalse,
    ColorCheckTrue,
    colotButtonTrue,
    colotButtonFalse,
  } = pageStyles[currentVariant];

  return (
    <div className={`relative isolate px-6 py-24 sm:py-32 lg:px-8 ${fontClass}`}>
      {/* Renderizar las animaciones de Pacman solo en la variante young */}
      {variant === "young" && (
        <>
          <motion.img
            src={Pacman}
            alt="Pacman"
            className="absolute z-5 w-[10rem] h-40 opacity-90"
            animate={{
              x: [0, 500, 1300, 500, 0],
              y: [0, 180, 100, 180, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.img
            src={PacmanOrange}
            alt="Pacman Orange"
            className="absolute z-5 w-[10rem] h-30 opacity-90 top-40"
            animate={{
              x: [0, 300, 1300, 300, 0],
              y: [600, 450, 400, 450, 600],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.img
            src={Pacman}
            alt="Pacman"
            className="absolute z-5 w-[10rem] h-30 opacity-90 top-60"
            animate={{
              x: [0, 500, 1300, 500, 0],
              y: [900, 750, 700, 750, 900],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </>
      )}
      <div className="mx-auto max-w-4xl text-center">
        <p className={`${titleClass}`}>{title}</p>
      </div>
      <p className={`${descriptionClass}`}>{description}</p>

      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured
                ? currentVariant === "young"
                  ? "bg-[#ff0070]/60 shadow-2xl"
                  : currentVariant === "kids"
                  ? "bg-[#800080]/70 shadow-2xl"
                  : currentVariant === "adult"
                  ? "bg-[#4CAF50]/60 shadow-2xl" // Diseño para adultos destacados
                  : "bg-blue-950/100 shadow-2xl" // Diseño por defecto para destacados
                : currentVariant === "young"
                ? "bg-[#ffe4e6]/70"
                : currentVariant === "kids"
                ? "bg-white/60 shadow-2xl"
                : currentVariant === "adult"
                ? "bg-[#e8f5e9]/70"
                : "bg-white/70",
              "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 transition-transform duration-300 transform-gpu hover:scale-105 hover:shadow-2xl"
            )}
          >
            <h3
              id={tier.id}
              className={classNames(
                tier.featured ? cardTextClassTrue : cardTextClassFalse,
                "text-base/8 font-bold"
              )}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? MoneyTextClassTrue : MoneyTextClassFalse
                )}
              >
                {tier.priceMonthly}
              </span>
              <span
                className={classNames(
                  tier.featured ? "text-white" : "text-gray-800",
                  FontSizeYear
                )}
              >
                /anual
              </span>
            </p>
            <p
              className={classNames(
                tier.featured ? "text-gray-100" : "text-gray-800",
                FontSizeYear,
                "mt-6"
              )}
            >
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? "text-gray-100" : "text-gray-800",
                FontSizeYear,
                "mt-8 space-y-3 sm:mt-10"
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(
                      tier.featured ? ColorCheckTrue : ColorCheckFalse,
                      "h-6 w-5 flex-none"
                    )}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured ? colotButtonTrue : colotButtonFalse,
                "mt-8 block rounded-md px-3.5 py-2.5 text-center text-xs font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
              )}
            >
              Empieza ahora
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
