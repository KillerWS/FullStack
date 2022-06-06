import React from "react";
import {Container } from '@material-ui/core'
import { BrowserRouter, Route, Routes, } from "react-router-dom";


import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
const App=()=>{
    
    return(
        <BrowserRouter>
        <Container maxidth="lg">
        <Navbar/>
        <Home/>
        <Routes>
            <Route path="/" exact component={Home}></Route>
            <Route path="/" exact component={Auth}></Route>
        </Routes>

    </Container>
    </BrowserRouter>
    )

}

export default App