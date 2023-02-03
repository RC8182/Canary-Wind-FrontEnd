import {  Flex, Image} from '@chakra-ui/react'
import React from 'react'

export const RosaViento = (props) => {
  const grados= props.grados;
  const dirViento='rotate('+ grados +'deg)'
  return (
    <Flex 
      display={'flex'} 
      height={'180px'} 
      width={'180px'} 
      backgroundColor={'#0093D1' } 
      borderRadius={'50%'}
      zIndex={1}>
        <Flex  height={'180px'} width={'180px'} alignItems={'center'} justifyContent={'center'} position={'absolute'} >

            <Image 
                className='icono-rosa-viento'    
                boxSize='160px'
                borderRadius='full'
                src={require('./clipart1138278.png')} 
                alt='Wind Compass' 
                zIndex={10}
                />

        </Flex>
        <Flex  height={'180px'} width={'180px'} alignItems={'center'} justifyContent={'center'} position={'absolute'} >

            <Image
                className='icono-flecha-rosa-viento'     
                boxSize='120px'
                borderRadius='full'
                src={require('./kisspng-arrow-clip-art-red-arrow-down-5aaae5eb244620.2286416215211494191486.png')} 
                alt='Wind Compass' 
                transform={dirViento}
                zIndex={5}
                />

            </Flex>
        <Flex  height={'200px'} width={'200px'} alignItems={'center'} justifyContent={'center'} position={'absolute'} zIndex={1} >

        </Flex>

    </Flex>
  )
}
