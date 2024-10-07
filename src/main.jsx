import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import UserLayout from './Layouts/UserLayout.jsx'

// pages
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'


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
