import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

export const Tablas = (props) => {
  const hora= props.hora
  const viento= props.viento
  const racha= props.racha
  // Creamos la lista para almacenar todos los datos de nuestra tabla
  const data= [hora, viento, racha]

  return (
    <TableContainer width={'250px'} overflow={'auto'}>
          <Table size='sm' variant={'mytable'}>
            <Thead color={'#0093D1 Important!'}>
              <Tr >
                <Th>Hora</Th>
                <Th>Viento</Th>
                <Th>Racha</Th>
              </Tr>
            </Thead>
            <Tbody>
            
                { // Accedemos a data[0] en este caso la lista de hora y como todas las listas tienen los mismos indices la utilizamos para iterar con map e imprimir el valor para cada elenento de nuestra lista.
                  data[0].map((e, i)=>{ return(
                  <Tr key={i}>
                    <Td>{hora[i]}</Td>
                    <Td>{viento[i]} (Knots)</Td>
                    <Td>{racha[i]} (Knots)</Td>
                  </Tr>)
                    })}
            </Tbody>
          </Table>
        </TableContainer>
  )
}
