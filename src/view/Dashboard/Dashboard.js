import { Flex, Image } from "@chakra-ui/react"
import '../../CSS/index.css'
import { DateWhiteCard } from "../../components/Card/DateWhiteCard"
import { TideWhiteCard } from "../../components/Card/TideWhiteCard"
import { WinWhiteCard } from "../../components/Card/WindWhiteCard"
import { Header } from "../../components/NavBar/Header"



export const Dashboard = () => {

  return (
    <Flex 
    position={'relative'}
    display={'flex'}
    flexDirection={'column'}>

        <div className='fixed'>
            <Header />
        </div>
        <Flex>
            <Image
                boxSize='100%'
                objectFit='cover'
                src={require('../../img/descarga.png')} alt='Playa kite El Médano Tenerife'/>
        </Flex>


    <Flex
      display={'flex'}
      flexDirection={'row'}
      flexWrap={'wrap'}
      width={'100vw'}
      margin={'5px'}
      padding={'5px'}
      justifyContent={'center'}>

        <Flex>
            <WinWhiteCard localidad={'El Médano'} /> 
        </Flex>
        <Flex>
            <TideWhiteCard  />
        </Flex>
        <Flex>
             <DateWhiteCard />
        </Flex>


    </Flex>
    </Flex>
    )
}
