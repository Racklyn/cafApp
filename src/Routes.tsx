import React from 'react'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";

import Home from './pages/Home'
import Opcoes from './pages/Opcoes';
import Criacao from './pages/Criacao';

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
        {
            path: "/criacao",
            element: <Criacao/>,
        }
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