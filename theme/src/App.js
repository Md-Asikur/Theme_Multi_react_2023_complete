import ThemeMenu from "./thememenu/ThemeMenu";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import ThemeAction from "./actions/ThemeAction"

import Navbar from "./com/Navbar";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./com/Home";
import About from "./com/About";
import Services from "./com/Services";
import Contact from "./com/Contact";
import Portfolio from "./com/Portfolio";
import Details from "./com/Details";

function App() {
  const dispatch = useDispatch()
   const themeReducer = useSelector((s) => s.Theme);
   useEffect(() => {
     const themeClass = localStorage.getItem("themeMode", "theme-mode-light");

     const colorClass = localStorage.getItem("colorMode", "theme-mode-light");

     dispatch(ThemeAction.setMode(themeClass));

     dispatch(ThemeAction.setColor(colorClass));
   
   }, [dispatch]);
  return (
    <>
      <div className={`${themeReducer.mode} ${themeReducer.color}`}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
