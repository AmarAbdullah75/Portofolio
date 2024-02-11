import React, { useEffect, useState } from "react";
import "./App.css";
import Allcontent from "./Page/Allcontent";
import Splash from "./Component/Splash";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Notfound from "./Page/Notfound";

const App = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 11000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {isSplashVisible ? (
        <Navigate to="/splash" replace={true} />
      ) : (
        <Navigate to="/" replace={true} />
      )}
      <Routes>
        <Route path="/splash" element={<Splash />} />
        <Route path="/" element={<Allcontent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
