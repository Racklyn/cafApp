import React from 'react'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    BrowserRouter,
    Routes as RoutesContainer
  } from "react-router-dom";

import Home from './pages/Home'
import Opcoes from './pages/Opcoes';
import Criacao from './pages/Criacao';
import Visualizacao from './pages/Visualizacao';
import Final from './pages/Final/Final';

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
        },
        {
            path: "/visualizacao",
            element: <Visualizacao/>,
        },
        {
            path: "/final",
            element: <Final/>,
        }
      ]);

    return(

        //<RouterProvider router={router} />

        <BrowserRouter>
            <RoutesContainer>
                <Route path="/" element={<Home/>}/>
                <Route path="/opcoes" element={<Opcoes/>}/>
                <Route path="/criacao" element={<Criacao/>}/>
                <Route path="/visualizacao" element={<Visualizacao/>}/>
                <Route path="/final" element={<Final/>}/>
            </RoutesContainer>
        </BrowserRouter>
    )
}