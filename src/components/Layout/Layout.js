import React from "react";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="mx-10">
      <NavBar />
       <div>
       {children}
       </div>
       <Footer/>
    </div>
  );
};

export default Layout;
