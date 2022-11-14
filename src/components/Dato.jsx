

const Dato = ({dato}) => {

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
              >
                Editar
              </button>
              <button type="button"
              className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
              >
                Eliminar
              </button>
            </td>
        </tr>
    )
}

export default Dato
