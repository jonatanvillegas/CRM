import { useRouteError } from "react-router-dom";

 export function ErrorPage() {
    //conseguir el error error.message
    const error = useRouteError()

    return(
        <div className=" spa-y-8 ">
            <h1 className=" text-center text-4xl font-extrabold mt-8 text-blue-900 ">CRM-clientes</h1>
            <p className=" text-center "> Hubo un Error</p>
            <p className=" text-center">{error.statusText || error.message}</p> 
                    
        </div>
        //revisa si error.status exite y lo imprime sino error.mesage
    )
}