import { useNavigate,Form, redirect } from "react-router-dom";
import { eliminarCliente } from "../data/Clientes";


export async function action({params}){

  await eliminarCliente(params.clienteId)

  return redirect('/')
}


const Dato = ({dato}) => {
  const navigate = useNavigate()
    const {nombre, telefono, email,empresa,id} = dato;

    return (
        <tr>
            <td className="p-3 space-y-1">
                <p className="text-1xl text-gray-800 uppercase">{nombre}</p>
                <p className="text-1xl" >{empresa}</p>
            </td>
            <td className="p-3 ">
               <p className="text-gray-600 "> <span className="text-gray-800 uppercase font-bold">E-mail:</span> {email}</p>
               <p className="text-gray-600 "> <span className="text-gray-800 uppercase font-bold">Telefono:</span> {telefono}</p>
            </td>
            <td className="p-3 flex gap-2">
              <button type="button"
              className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
              onClick={() => navigate(`/clientes/${id}/editar`)}
              >
                
                Editar
              </button>
              <Form
              method="post"
              action={`/clientes/${id}/eliminar`}
              onSubmit={(e) => {
                if (!confirm('Deseas eliminar este cliente?')) {
                  e.preventDefault()
                }
              }}
              >
                <button type="submit"
                className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
                >
                  Eliminar
                </button>
              </Form>
              
            </td>
        </tr>
    )
}

export default Dato
