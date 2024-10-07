import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import UserLayout from './Layouts/UserLayout.jsx'

// pages
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Products from './Pages/Products.jsx'
import Contact from './Pages/Contact.jsx'


const routes = createBrowserRouter([
  {
    path: '/',
    element: <UserLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <createBrowserRouter>
      <RouterProvider router={routes} />
    </createBrowserRouter>
  </StrictMode>,
)
