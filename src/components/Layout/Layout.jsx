import React from "preact";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./layout.css";
import "../../styles/style.scss";

const Layout = ({ children, footerInfo, headerInfo }) => {
  return (
    <>
      <Header headerInfo={headerInfo} />
      <main className="notfound__flex">{children}</main>
      <Footer footerInfo={footerInfo} />
    </>
  );
};
export default Layout;
