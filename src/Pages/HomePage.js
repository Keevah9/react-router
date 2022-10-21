import React from 'react'
import Header from '../container/Header'
import Footer from '../container/Footer';
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  );
}

export default Home