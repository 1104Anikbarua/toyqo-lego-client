import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@smastrom/react-rating/style.css'
import { RouterProvider } from 'react-router-dom'
import router from './Components/Layouts/Layouts.jsx'
import AuthProvider from './Components/AuthProvider/AuthProvider'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <AuthProvider>
      <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
      </React.StrictMode>
    </AuthProvider>
  </HelmetProvider>,
)
