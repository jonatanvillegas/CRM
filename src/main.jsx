import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom' // <=necesario para navegar 
import Layout from './components/Layout' //componentes reutilizables
import NuevoCliente,{action as nuevoClienteAction} from './pages/NuevoCliente' // distintas paginas 
import Index, {loader as clientesLoader} from './pages/Index' //necesaria y se tiene que exportar 
import { ErrorPage } from './pages/ErrorPage'
import EditarCliente,{loader as editarCliente , action as editarClienteaction} from './pages/EditarCliente'
import { action as eliminar  } from './components/Dato'
// utilizando react router 


// creando las rutas 
const router = createBrowserRouter([
  {
    path: '/',
    element :<Layout/> ,
    children: [ //propiedad children
      {
        index: true,
        element: <Index/>,
        loader: clientesLoader,
        errorElement: <ErrorPage/>
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente/>,
        action: nuevoClienteAction
      },
      //rautin dinamico
      {
        path:'/clientes/:clienteId/editar',
        element: <EditarCliente/>,
        loader: editarCliente,
        action: editarClienteaction,
        errorElement: <ErrorPage/>
      },
      {
        path: '/clientes/:clienteId/eliminar',
        action: eliminar
      }
    ]

  }, 
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
