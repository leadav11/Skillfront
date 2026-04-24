
import Header from '../Components/Header'
import TarjetaCurso from '../Components/TarjetaCurso'
import TarjetPlanes from '../Components/TarjetPlanes'
import Preguntas from '../Components/Preguntas'
import Footer from '../Components/Footer'
import Slider from '../Components/Slider'
import { useLocation } from "react-router-dom";



export default function Adult() {
    const location = useLocation();
  
    // Determinar variante según la ruta
    const variant = location.pathname.includes("/kids")
    ? "kids"
    : location.pathname.includes("/adult")
    ? "adult"
    : "default";
  
    return (
      <div className="bg-gradient-to-l from-[#071912]/95 to-[#0d6242]/100 max-screen">
         <Header  variant={variant}/>
         <Slider variant={variant} />        
         <TarjetPlanes variant={variant}/> 
         <TarjetaCurso variant={variant}/>        
         <Preguntas variant={variant}/> 
         <Footer variant={variant}/>   
      </div>
    )
}
/* bg-gradient-to-t: Degradado de abajo hacia arriba.

bg-gradient-to-tr: Degradado de abajo-izquierda hacia arriba-derecha.

bg-gradient-to-r: Degradado de izquierda a derecha.

bg-gradient-to-br: Degradado de arriba-izquierda hacia abajo-derecha.

bg-gradient-to-b: Degradado de arriba hacia abajo.

bg-gradient-to-bl: Degradado de arriba-derecha hacia abajo-izquierda.

bg-gradient-to-l: Degradado de derecha a izquierda.

bg-gradient-to-tl: Degradado de abajo-derecha hacia arriba-izquierda. */