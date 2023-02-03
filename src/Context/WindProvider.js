import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const WindContext= createContext()

export const WindProvider = ({children}) => {


  const fetch_muchoViento= async()=>{
    const url= 'http://127.0.0.1:8000/'
    const respuesta= await fetch(url)
    const res= respuesta.json()
    return res
  }

    const limpiarHora=(list)=>{
      const lista= list?.map((e)=>{ return e})
      const horaLimpia= lista?.map((i)=> {return i.replace("h", "" ) })
      return horaLimpia
    }

    const [obViento, setObViento ]= useState()
    const [obViento1, setObViento1 ]= useState()
    const [obViento2, setObViento2 ]= useState()
    const [obViento3, setObViento3 ]= useState()
    const [obVientoActual, setObVientoActual ]= useState()
    
    const get_datos_viento= async()=>{
      const api= await fetch_muchoViento();
      setObViento(api[1]) // Lista con la data de los 3 días
      setObViento1(api[1][0]) // Lista data día 1
      setObViento2(api[1][1]) // Lista data día 2
      setObViento3(api[1][2]) // Lista data día 3
      setObVientoActual(api[0]) // Lista data Viento Actual
    }


  useEffect(() => {
    get_datos_viento()
    const apiCall=setInterval(() => {
      get_datos_viento()
    }, 120000); // 1 minuto = 60000 milisegundos
    
    return () => {
      clearInterval(apiCall)
    };
  }, []);

  const data={limpiarHora, obViento, obViento1, obViento2, obViento3, obVientoActual}

  return (
    <WindContext.Provider value= {data} >
    {children}
    </WindContext.Provider>
  )
}
