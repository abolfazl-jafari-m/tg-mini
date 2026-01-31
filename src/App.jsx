import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./pages/home.jsx";
import Oauth from "./pages/oauth.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home/>} />
                <Route path={"/oauth"} element={<Oauth/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;