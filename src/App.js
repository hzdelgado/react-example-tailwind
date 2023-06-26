import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./components/Home";

const App = () =>{
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}

export default App