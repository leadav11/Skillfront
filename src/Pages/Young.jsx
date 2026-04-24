import { useLocation } from "react-router-dom";
import Header from '../Components/Header'
import Slider from '../Components/Slider'
import TarjetPlanes from '../Components/TarjetPlanes'
import TarjetCurso from '../Components/TarjetaCurso'
import Preguntas from '../Components/Preguntas'
import Footer from '../Components/Footer'


export default function Young() {
  const location = useLocation();

  // Determinar variante según la ruta
  const variant = location.pathname.includes("/kids")
    ? "kids"
    : location.pathname.includes("/Young")
    ? "young"
    /* : location.pathname.includes("/adult")
    ? "adult" */
    : "default";
  
    
  return (
    <div className="bg-gradient-to-b from-[#000000]/90 to-[#3533cd]/100 min-h-screen">
      <Header variant={variant} />
      <Slider variant={variant} />
      <TarjetPlanes variant={variant} />
      <TarjetCurso variant={variant}/>
      <Preguntas variant={variant}/>
      <Footer variant={variant}/>
    </div>
  )
}
