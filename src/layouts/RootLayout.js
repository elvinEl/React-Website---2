import React, { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";

import { Outlet } from "react-router-dom";
import Header from "../pages/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../scroll/ScrollToTop";
import Whatsapp from "../components/fixed-buttons/Whatsapp";
import ScrollTo from "../components/fixed-buttons/ScrollTo";
// import Breadcrumbs from '../components/breadcrubms-router/Breadcrumbs'

function RootLayout() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <div className="root-layout">
      {loading ? <div className="w-full h-[100vh] flex justify-center items-center">
        (
        <HashLoader

        className=""
          color={"#1265c4"}
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )
      </div> : (
        <div>
          <Header />
          <ScrollToTop />
          <main>
            <Outlet />
            <Whatsapp />
            <ScrollTo />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default RootLayout;
