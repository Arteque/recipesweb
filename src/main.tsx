import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'

import './index.css'

import Template from './components/templates/Template'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Recipes from './components/pages/Recipes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Template />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element:<About />
      },
      {
        path: '/recipes',
        element:<Recipes />
      }
    ],
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
