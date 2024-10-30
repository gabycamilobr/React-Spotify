import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ConteudoPrincipal from './components/ConteudoPrincipal.jsx'
import Artista from './components/Artista.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {index:true, element:<ConteudoPrincipal/>},
      {path: 'artistas/:id', element: <Artista/>},
      {path : '*', element: <h1>PageNotFound</h1>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)