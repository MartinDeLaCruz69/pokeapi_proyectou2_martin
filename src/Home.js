import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import  Start  from "./Main.js"
import Begin from "./About.js"
import Index from "./Navbar"

const Home = () => {
  // eslint-disable-next-line
  const Inicio = () => <h1>Home</h1>;
  // eslint-disable-next-line
  const About = () => <h1>190170</h1>;
  return (
    <>
    <Index />
      <BrowserRouter>
        <Routes>
          <Route path="/pokes" element={<Start />}></Route>
          <Route path="/matricula" element={<Begin />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
};
export default Home;