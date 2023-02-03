import { useContext, useEffect, useState } from "react"
import { WindContext} from "../../Context/WindProvider";


export const Header = () => {

  const { limpiarHora, obVientoActual, obViento1}= useContext(WindContext)

  // Como el indice de la hora no siempre será igual que la hora creamos una función para localizar el viento correspondiente a la hora indicada 

  const h= new Date().getHours().toString().padStart(2, '0') //padStart 2 digitos, y si tiene 1 solo agregamos un 0
  const obVientoHora= limpiarHora(obViento1?.hora) //quitamos la h de la lista hora 
  const horaActualenLista= String(obVientoHora?.filter((e)=>{return e === h})) // Buscamos la hora Actual en nuestra lista
  const horaIndexList= obVientoHora?.indexOf(horaActualenLista) // Obtenemos el indice de la hora actual en la lista

  const pronostico=  (obViento1?.viento)? <div>{obViento1.viento[horaIndexList]}</div> : <div>cargando</div>
  const vientoActual= (obVientoActual?.viento)? <div>{obVientoActual.viento}</div> : <div>cargando</div>
  const [scrollPosition, setScrollPosition]=useState(0);

    var nombreClase=''
     
    if(scrollPosition <= 20){
      nombreClase='header-bg-transparente '
    }
    else{
      nombreClase='header-bg-opaco'
    }


  useEffect(() => {
    const onScroll = () => setScrollPosition(window.pageYOffset);
    
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);

  }, []);
  
  return (
    <div className= {'header ' +nombreClase}>
      <header>
        <div className='contenedor-elementos-header'>
          <div className='head-logo'>
            <h2>CanaryWind.com</h2>
          </div>
          <div className='head-viento'>
            <div>
              <p>Viento Actual: &nbsp;</p>
            </div>
            <div>
              <h2> {vientoActual} </h2>
            </div>
            <div>
              <h2>&nbsp; knots</h2>
            </div>
            
          </div>
          <div className= 'head-prediccion'>
            <div>
              <p>Pronóstico: &nbsp;</p>
            </div>
            <div>
              <h2> {pronostico} </h2>
            </div>
            <div>
              <h2>&nbsp; knots</h2>
            </div>

          </div>
        </div>
       </header>
    </div>

    )
}
