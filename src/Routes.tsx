import React from 'react'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";

import Home from './pages/Home'
import Opcoes from './pages/Opcoes';

export default function Routes(){

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/opcoes",
            element: <Opcoes/>,
        },
      ]);

    return(

        <RouterProvider router={router} />

        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/" element={Home}/>
        //         <Route path="/app" element={OrphanagesMap}/>

        //     </Routes>
        // </BrowserRouter>
    )
}