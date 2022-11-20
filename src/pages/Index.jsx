
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Dato from '../components/Dato'
import { obtenerClientes } from '../data/Clientes'

export function loader() { // procesa datos de una Api o de un state
    const clientes = obtenerClientes()

    return clientes
}

const Index = () => {

    const datos = useLoaderData(); //funciona para acceder lo que retornes en loader en este caso clientes 

  return (
    <>
      <h1 className='font-black text-blue-900 text-4xl'>
        clientes
      </h1>
      <p className=' mt-3'>Administra tus Clietes</p>

      {datos.length ? (
        <table className=' w-full bg-white shadow mt-5 table-auto'>
            <thead className=' bg-blue-800 text-white '>
                <tr>
                    <th className='p-2'>Cliente</th>
                    <th className='p-2'>Contacto</th>
                    <th className='p-2'>Acciones</th>
                </tr>
            </thead>  
            <tbody>
                {datos.map( dato => 
                   <Dato
                    dato={dato}
                    key={dato.id}
                   />
                )}
            </tbody>

        </table>
      ):(
        <p className='text-center mt-10'> Nohay clientes aun</p>
      )}
    </>
  )
}

export default Index
