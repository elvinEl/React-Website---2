import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../pages/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../scroll/ScrollToTop";
import Whatsapp from "../components/fixed-buttons/Whatsapp";
import ScrollTo from "../components/fixed-buttons/ScrollTo";
function RootLayout() {
  return (
    <div className="root-layout">
      <Header />
      <ScrollToTop />
      <main>
        <Outlet />
        <Whatsapp />
        <ScrollTo/>
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
