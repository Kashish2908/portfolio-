import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";

function RouteConfig() {
    return (
        <>
            <BrowserRouter>

                <Nav />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/Projects" element={<Projects />}></Route>
                    <Route path="/Contact" element={<Contact />}></Route>
                    <Route path="/About" element={<About />}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default RouteConfig