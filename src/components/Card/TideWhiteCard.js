import { Divider, Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { TideContext } from '../../Context/TideProvider'
import { TideChart } from '../Charts/TideChart'

export const TideWhiteCard = () => {

  const {marea1, marea2, marea3, marea4, listaDatosMareas}= useContext(TideContext);
   

  // Buscamos el tipo de marea sabiendo que 
  const hpleamar1= (marea1?.tipo === 'pleamar')? marea1?.hora: marea2?.hora;
  const hpleamar2= (marea3?.tipo === 'pleamar')? marea3?.hora: marea4?.hora;
  const hbajamar2= (marea1?.tipo === 'bajamar')? marea1?.hora : marea2?.hora;
  const hbajamar1= (marea3?.tipo === 'bajamar')? marea3?.hora : marea4?.hora;
  
  // Pasamos la hora de str a num y la comparamos con la hora actual para sacar el estado actual.
  const horaActual= new Date().getTime();
  const marea1Time= new Date(marea1?.fecha +' '+ marea1?.hora).getTime(); 
  const marea2Time= new Date(marea2?.fecha +' '+ marea2?.hora).getTime(); 
  const marea3Time= new Date(marea3?.fecha +' '+ marea3?.hora).getTime(); 
  const marea4Time= new Date(marea4?.fecha +' '+ marea4?.hora).getTime(); 

  var estado= ''

    if (horaActual <= marea1Time){
      if(marea1?.tipo === 'pleamar'){
        estado= ' Subiendo';
      }
      else{
        estado= ' Bajando';
      } 
    }
    else if(horaActual > marea1Time && horaActual < marea2Time ){
      if(marea1?.tipo === 'pleamar'){
        estado= ' Subiendo';
      }
      else{
        estado= ' Bajando';
      }  
    }
    else if(horaActual > marea2Time && horaActual < marea3Time){
      if(marea1?.tipo === 'pleamar'){
        estado= ' Subiendo';
      }
      else{
        estado= ' Bajando';
      } 
    }
    else if(horaActual > marea3Time && horaActual < marea4Time){
      if(marea1?.tipo === 'pleamar'){
        estado= ' Subiendo';
      }
      else{
        estado= ' Bajando';
      } 
    }


  return (
    <Flex         
    className='contenedor-card'
    backgroundColor={'#FFF'}
    color={'black'} 
    fontSize={'18px'}
    borderRadius={'10px'}
    width={'300px'}
    height={'380px'}
    margin={'2px'}
    padding={'8px'}
    display={'flex'}
    flexDirection={'column'}
    flexWrap={'wrap'}>
      
      <Flex flexDirection={'column'}>
        <Flex >
          <h2>Mareas </h2>
        </Flex>
        <Flex>
        <Divider className={'divider'} orientation='horizontal' borderColor={'rgb(255, 154, 0)'} />
        </Flex>
      </Flex>
      
      <Flex justifyContent={'center'}>
        <h2>Estado:{ <span>{estado}</span>}</h2>
      </Flex>

      <Flex fontSize={'.8em'}>
        <Flex flexDir={'column'} margin={'4px'} padding={'2px'} >
          <Flex>
            <h2>Pleamar 1: <span> {hpleamar1} hs</span></h2>
          </Flex>
          <Flex>
            <h2>Bajamar 1: <span> {hbajamar1} hs</span></h2>
          </Flex>
        </Flex>

        <Divider className={'divider'} orientation='vertical' borderColor={'rgb(255, 154, 0)'} />

        <Flex flexDir={'column'} margin={'4px'} padding={'2px'}>
          <Flex>
            <h2>Pleamar 2: <span> {hpleamar2} hs</span></h2>
          </Flex>
          <Flex>
            <h2>Bajamar 2: <span> {hbajamar2} hs</span></h2>
          </Flex>
        </Flex>
      </Flex>

      <Flex justifyContent={'center'}>
        {listaDatosMareas? <TideChart min_day={.5} max_day={.5} estado={estado} /> :<div>Cargando...</div> }
      </Flex>


    </Flex>
  )
}
