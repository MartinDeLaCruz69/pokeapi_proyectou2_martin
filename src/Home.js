import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import  Main  from "./Main.js"
import Me from "./About.js"
import Navbar from "./Navbar.js"

const Home = () => {
  const Inicio = () => <h1>Home</h1>;
  const Pokemon = () => <h1>Pokemon Info</h1>;
  const About = () => <h1>190170</h1>;
  return (
    <>
    <Dir />
      <BrowserRouter>
        <Routes>
          <Route path="/pokemons" element={<Main />}></Route>
          <Route path="/pokemonsinfo" element={<Info  />}></Route>
          <Route path="/matricula" element={<Me />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
};
export default Home;