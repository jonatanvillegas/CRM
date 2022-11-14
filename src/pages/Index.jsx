import { data } from 'autoprefixer'
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Dato from '../components/Dato'
export function loader() { // procesa datos de una Api o de un state
    const clientes = [
        {
            id: 1,
            nombre:'juan',
            telefono: 151654841,
            email:'noto@noto.com',
            empresa: 'Pixel'
        },
        {
            id: 2,
            nombre:'jose',
            telefono: 115321516,
            email:'jose@noto.com',
            empresa: 'Pixel'
        },
        {
            id: 3,
            nombre:'pedro',
            telefono: 4891323135,
            email:'pedro@noto.com',
            empresa: 'Pixel'
        },
        {
            id: 4,
            nombre:'javier',
            telefono: 746688265,
            email:'javier@noto.com',
            empresa: 'Pixel'
        },
        {
            id: 5,
            nombre:'josue',
            telefono: 785654865,
            email:'josue@noto.com',
            empresa: 'Pixel'
        }
    ]

    return clientes
}

const Index = () => {

    const datos = useLoaderData();

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
