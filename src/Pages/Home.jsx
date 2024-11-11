import React from "react";
import { Navbar } from "react-bootstrap";
import Header from "../Componenets/Header/Header";
import Footer from "../Componenets/Footer/Footer";
import Cards from "../Componenets/Cards/Cards";
import Partners from "../Componenets/Partners/Partners";
import Links from "../Componenets/Links/Links";

const Home = () => {
  return (
    <div>
      <Links />
      <Header />
      <Partners />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
