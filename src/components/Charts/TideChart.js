import React, { useContext, useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import { TideContext } from '../../Context/TideProvider';

export const TideChart = (props) => {


  const color= 'black'
  const minDay= props.min_day;
  const maxDay= props.max_day;
  const estado= props.estado;
  // Creamos funcion de día en milisegunds

  const hoy= new Date().getTime() 

  function dia(n){
    const milisegundos=  86400000;
    const numeroDias= n * milisegundos
    return numeroDias
  }
  
  // Creamos ciclo para llenar la lista


  const mareas=[];
  const {listaDatosMareas}= useContext(TideContext)
  
  listaDatosMareas?.map((e)=> {
    const altura= e.altura
    const fecha= e.fecha
    const hora= e.hora
    const diaHora= new Date(fecha +' '+ hora).getTime()
    // console.log('Dia - Hora ', diaHora)
    // console.log(altura)
    return mareas.push([diaHora, altura])
    
  })


  const newSeries=[{
    name: 'Tide',
    data: mareas
  },]


  const [series, setSeries]= useState([
        {
            name: 'Tide',
            data: [{
              "fecha": "2023-01-01",
            }]
          }
    ])
    
    const getSeries=()=>{
        setSeries(newSeries);
    }
    useEffect(() => {
      getSeries()
      return () => {
        
      };
    },[] );
    

    const options={
      chart: {
        zoom:{
          enabled: false,
        },

          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: true,
          offsetX: 30
        },
        stroke: {
          curve: 'smooth'
        },
        yaxis: {
          labels: {
            style: {
              colors: color,
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              cssClass: 'apexcharts-xaxis-label',
          }
          }

        },
        xaxis: {
          min: hoy - dia(minDay) ,
          max:hoy + dia(maxDay),
          type: 'datetime',
          labels: {
            datetimeFormatter: {
              hour: 'HH:mm'
            },
            style: {
              colors: color,
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              cssClass: 'apexcharts-xaxis-label',
          }
          },
          

        },
        annotations: {
          xaxis: [
            {
              x: new Date().getTime(),
              borderColor: 'rgb(255, 154, 0)',
              label: {
                borderColor: 'rgb(255, 154, 0)',
                orientation: 'horizontal',
                text: estado,
                style: {
                  color: '#fff',
                  background: '#0093D1',
                }
              }
            }
          ],
          points: [{
            x: new Date().getTime(),
            y: '0',
            marker: {
              size: 8,
              fillColor: '#fff',
              strokeColor: '#0093D1',
              radius: 5,
            },
            label: {
              borderColor: 'rgb(255, 154, 0)',
              offsetY: 0,
              style: {
                color: '#fff',
                background: '#0093D1',
              },
              text: Date().slice(16,21) +' hs',
            }
          }]
        },

      }

  return (
    <ReactApexChart options={options} series={series} type="area" height={200} width={'100%'}  />
  )
}
