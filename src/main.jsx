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
import AuthProvider from './assets/components/Providers/AuthProvider';
import PrivetRout from './assets/components/PrivetRout/PrivetRout';
import Profile from './assets/components/profile/Profile';
 

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
        element:<PrivetRout>
          <Details></Details>
        </PrivetRout>,
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
        element:<PrivetRout>
          <Select></Select>
        </PrivetRout>,
        loader:  ()=>  fetch('../fakedata.json'),
      },
      {
        path:'/profile',
        element:<PrivetRout>
          <Profile></Profile>
        </PrivetRout>
      }

       
       
       

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
