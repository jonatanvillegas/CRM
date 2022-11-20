//creando variables en Vite estructura VITE_ 
//consumiendo api local con json server 
//recordar utilizar variables de entorno
export async function obtenerClientes (){
    const respuesta = await fetch(import.meta.env.VITE_API_URL)
    const resultado = await respuesta.json()

    return resultado
}
export async function obtenerCliente (id){
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    const resultado = await respuesta.json()

    return resultado
}

export async function actualizar(id, datos) {
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{
            method: 'PUT',//ACTUALIZAR UN REGISTRO
            // son datos que se envian al servidor
            body: JSON.stringify(datos), // convirtiendo el objeto a json
            headers: {
                'Content-Type': 'application/json' //enviando al servidor
            }
        })
        await res.json()
    } catch (error) {
        console.log(error)
    }
}

export async function agregarCliente(datos){
    try {
        const res = await fetch(import.meta.env.VITE_API_URL,{
            method: 'POST',//metodo PARA GUARDAR UN REGISTRO
            // son datos que se envian al servidor
            body: JSON.stringify(datos), // convirtiendo el objeto a json
            headers: {
                'Content-Type': 'application/json' //enviando al servidor
            }
        })
        await res.json()
    } catch (error) {
        console.log(error)
    }
}

export async function eliminarCliente(id){
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{
            method: 'DELETE',//ACTUALIZAR UN REGISTRO
            // son datos que se envian al servidor
        
        })
        await res.json()
    } catch (error) {

    }
}