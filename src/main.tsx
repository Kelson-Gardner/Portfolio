import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createHashRouter, Navigate, RouterProvider } from 'react-router-dom'
import Home from './Home/Home.tsx'
import About from './About/About.tsx'
import Projects from './Projects/Projects.tsx'
import Experience from './Experience/Experience.tsx'
import Consultation from './Consultation/Consultation.tsx'

const router = createHashRouter([
  {
    path: "/home",
    element: <App page="home" contents={<Home />}/>
  },
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/about",
    element: <App page="about" contents={<About />}/>
  },
  {
    path: "/projects",
    element: <App page="projects" contents={<Projects />} />
  },
  {
    path: "/experience",
    element: <App page="experience" contents={<Experience />} />
  },
  {
    path: "/consultation",
    element: <App page="experience" contents={<Consultation />} />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
