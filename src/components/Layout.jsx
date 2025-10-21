import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router"; 

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black/85">
      <Navbar />
      <main className="grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
