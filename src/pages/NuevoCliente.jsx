import { useNavigate, Form, useActionData, redirect } from "react-router-dom" //Componente de Form 
import Formulario from "../components/Formulario"
import Error from "../components/Error"
import { agregarCliente } from "../data/Clientes"


  export async function  action ({request}) { 
    //action una de las propiedades del react router dom 
    //Procesa la entrada de datos de un form 
    const formData = await request.formData()
    const email =  formData.get('email')
    const datos = Object.fromEntries(formData)

    //validacion
    const errores =[]
    if (Object.values(datos).includes('')){
      errores.push('Todos los campos son obligatorios')
    }

    //Ayuda a validar el E-mail
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    
    if(!regex.test(email)){
      errores.push('El E-mail no es valido')
    }

    //retonar datos 
    if(Object.keys(errores).length){
      return errores
    }

    await agregarCliente(datos)

    return redirect('/') //se recomienda redirec para action y loader
  }

const NuevoCliente = () => {

    const navigate = useNavigate()
    const errores = useActionData()//retornar lo que tenemos en los accion
 
  return (
    <>
       <h1 className='font-black text-blue-900 text-4xl'>
       Nuevo Cliente
      </h1>
      <p className=' mt-3'>Llena todos los campos para agregar un nuevo cliente</p>
      <div className='flex justify-end'>
        <button className='bg-blue-800 font-bold uppercase text-white px-3 py-1 border'
        onClick={() => navigate(-1)}
        >
            Volver
        </button>
      </div>
      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10"> 

        {errores?.length && errores.map( ( error, i) => <Error key={i}>{error}</Error>)} 

        <Form method="post"
        >
          <Formulario /> 

          <input type="submit" className="bg-blue-800 uppercase p-3 mt-5 w-full font-bold text-lg text-white cursor-pointer" 
          value='Registrar Clientes'
          />
        </Form>
      </div>

    </>
  )
}

export default NuevoCliente
