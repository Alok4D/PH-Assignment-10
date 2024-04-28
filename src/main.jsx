


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
        path: '/addCraftItem',
        element: <AddCraftItem></AddCraftItem>,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

   <RouterProvider router={router} />
 
  </React.StrictMode>,

)
