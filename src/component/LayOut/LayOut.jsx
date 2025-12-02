import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import backgroundImg from "../../assets/photo-project/login/background-complete.png";
import GlassSwitch from "../../GlassSwitch/GlassSwitch";

export default function Layout() {
  const [isDark, setisDark] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setisDark(true);
    }
  }, []);

  function toggleMode() {
    const newMode = !isDark;
    setisDark(newMode);
    localStorage.setItem("darkMode", newMode);
  }

  return (
    <div className={isDark ? "dark" : `w-full`}>
      <div
        className={`min-h-screen flex items-center justify-center ${
          isDark ? "bg-[#071629]" : "bg-gray-100"
        }`}
      >
        <div
          className={`relative rounded-3xl px-10 py-2 ${
            isDark ? "bg-[#071629]" : "bg-white"
          } shadow-2xl`}
        >
          {!isDark && (
            <img
              src={backgroundImg}
              alt="background"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl z-0"
            />
          )}

          <div className="relative z-10 w-100 md:w-full">
            <NavBar />
            <Outlet />
          </div>
        </div>
      </div>

      <div className="absolute top-5 right-5 z-20">
        <GlassSwitch checked={isDark} onChange={toggleMode} />
      </div>
    </div>
  );
}
