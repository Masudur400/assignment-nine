import React from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";  
import Root from './assets/components/Root/Root';
import ErrorPage from './assets/components/ErrorPage/ErrorPage';
import Home from './assets/components/Home/Home';
import Details from './assets/components/Details/Details';
import Login from './assets/components/Login/Login';
import Register from './assets/components/Register/Register';
import Select from './assets/components/SelectList/Select';
 

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element: <Home></Home>,
        loader:  ()=>  fetch('../fakedata.json'),
      },
      {
        path:"/card/:id",
        element:<Details></Details>,
        loader:  ()=>  fetch('../fakedata.json'),
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
      element:<Register></Register>
      },
      {
        path:'/selectList',
        element:<Select></Select>,
        loader:  ()=>  fetch('../fakedata.json'),
      }

       
       
       

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
