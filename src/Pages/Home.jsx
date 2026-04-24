
import Header from '../Components/Header'
import TarjetaCurso from '../Components/TarjetaCurso'
import TarjetPlanes from '../Components/TarjetPlanes'
import Preguntas from '../Components/Preguntas'
import Footer from '../Components/Footer'
import Slider from '../Components/Slider'
import Casa from '../assets/Icons/Casa.svg'

export default function Home() {
  return (
    <>
    <div
      style={{
        backgroundImage: `url(${Casa})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
       <Header/>
       <Slider variant='default'/>
       <TarjetPlanes/>      
       <TarjetaCurso/>
       <Preguntas/>
       </div>
       <Footer/>
       </>
/*     </div> */
  )
}
