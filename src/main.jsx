import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Signin from './Components/Signin/Signin.jsx'
// import Login from './Components/Login/Login.jsx'
// import Dashboard from './Components/Dashboard/Dashboard.jsx'
// import  Footer from './Components/Footer/Footer.jsx'
  
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Router,
//   RouterProvider,
//   Route,
// } from "react-router-dom";
// import Layout from "./Layout.jsx";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element = {<Layout/>}>
//       <Route path='signin' element= {<Signin/>} />
//       <Route path='login' element= {<Login/>} />
//       <Route path= 'dashboard' element = {<Dashboard/>} />
//       <Route path= 'footer' element = {<Footer/>} />
//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    {/* <RouterProvider router={router}/> */}
  </StrictMode>,
)
