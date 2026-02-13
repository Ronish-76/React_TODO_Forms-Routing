import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Components/NavbarComponents";
import CounterApp from "../Pages/CounterApp";
import InfoCard from "../infocard";
import ToDo from "../Pages/ToDo";
import Home from "../Pages/Home";
import About from "../Pages/About";
import React from "react";
import Login from "../Pages/Login";

const AppRoute = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/counter" element={<CounterApp />} />
          <Route path="/infocard" element={<InfoCard />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoute;
