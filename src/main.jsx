import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom' // <=necesario para navegar 

// utilizando react router 


// creando las rutas 
const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>inicio</h1>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
