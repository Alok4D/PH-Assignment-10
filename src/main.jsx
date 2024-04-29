import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Roots/Root';
import Error from './Components/Error-Page/Error';
import CardSection from './Components/Card-Section-pages/CardSection';
import AddCraftItem from './Components/Add-Craft-Items/AddCraftItem';
import CardDetails from './Components/CardDetails/CardDetails';
import Login from './Components/Login-Pages/Login';

import Register from './Components/Register-Pages/Register';
import AuthProvider from './Components/Auth-Provider/AuthProvaider';
import Features from './Components/Fetures-Pages/Features';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <CardSection></CardSection>,
        loader: () => fetch('http://localhost:5000/addCraft')
      },
      {
        path: '/cardDetails/:id',
        element: <CardDetails></CardDetails>,
       loader : ({params}) => fetch(`http://localhost:5000/viewDetail/${params.id}`)
       
      },
      {
        path: '/addCraftItem',
        element: <AddCraftItem></AddCraftItem>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: '/',
        element: <Features></Features>,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<AuthProvider>
  
      <RouterProvider router={router} />
  
    </AuthProvider>
  <ToastContainer></ToastContainer>
  </React.StrictMode>,

)
