import React, { useState, useEffect,useContext } from "react";
import HashLoader from "react-spinners/HashLoader";

import { Outlet } from "react-router-dom";
import Header from "../pages/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/scroll/ScrollToTop";
import Whatsapp from "../components/fixed-buttons/Whatsapp";
import ScrollTo from "../components/fixed-buttons/ScrollTo";
import {darkMode} from '../context/Context'
// import DarkMode from "../context/DarkMode";
// import Breadcrumbs from '../components/breadcrubms-router/Breadcrumbs'

function RootLayout() {
  const [loading, setLoading] = useState(false);
  const {mode} = useContext(darkMode)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <div className={mode === true ? "light" : "dark"}>
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
          {/* <DarkMode/> */}
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default RootLayout;
