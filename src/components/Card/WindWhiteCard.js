import { Divider, Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { WindContext } from '../../Context/WindProvider';
import { RosaViento } from '../Icons/RosaViento';

export const WinWhiteCard = (props) => {
  const {obVientoActual}= useContext(WindContext);

    const localidad= props.localidad;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', 'hour':'numeric', 'minute': 'numeric' };
    const fecha_hora= new Date().toLocaleString('es-ES', options);

    const grados= obVientoActual?.grados;
    const direccion= obVientoActual?.direccion +' '+ grados + 'º'
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
          <h2>{localidad} </h2>
        </Flex>
        <Flex fontSize={'.5em'} >
        <h3>{fecha_hora}</h3>
        </Flex>
        <Flex>
        <Divider className={'divider'} orientation='horizontal' borderColor={'rgb(255, 154, 0)'} />
        </Flex>
      </Flex>


        <Flex 
        justifyContent={'center'}
        margin={'10px'}>

                <Flex                 
                display={'flex'}
                flexDirection={'column'}
                flexWrap={'wrap'}
                margin={'2px'}>
                    <Flex justifyContent={'center'}>
                        <Flex>
                            <h2>Viento: <span>{obVientoActual?.viento} Knots </span> </h2>
                        </Flex>
                    </Flex>
                    <Flex justifyContent={'center'}>
                        <Flex>
                            <br/>
                        </Flex>
                    </Flex>

                    <Flex justifyContent={'center'}>
                        <RosaViento grados={grados} />
                    </Flex>
                    <Flex justifyContent={'center'}>
                        <Flex>
                            <h2>Direccion del viento: {direccion}   </h2>
                        </Flex>
                    </Flex>
                </Flex>            
        </Flex>

    </Flex>
  )
}
