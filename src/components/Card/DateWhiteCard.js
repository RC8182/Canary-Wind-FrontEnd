import { Divider, Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { WindContext } from '../../Context/WindProvider'
import { Acordion } from '../Acordion/Acordion'

export const DateWhiteCard = () => {

  const { obViento }= useContext(WindContext);


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
    flexDirection={'column'}
    flexWrap={'wrap'}
    overflow={'auto'}
    >
    <Flex flexDirection={'column'}>
      <Flex >
        <h2>Predicción </h2>
      </Flex>
        <Divider className={'divider'} orientation='horizontal' borderColor={'rgb(255, 154, 0)'} />
      <Flex>
    </Flex>

        <Flex flexDirection={'column'}>
        { 
          obViento?.map ((e, index)=>{

            return <Acordion fecha= {e.fecha} hora={e.hora} viento={e.viento} racha={e.racha} key={index}/>
          })
          }
        </Flex>
      </Flex>


    </Flex>
  )
}
