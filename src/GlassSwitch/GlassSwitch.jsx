import React from "react";

export default function GlassSwitch({ checked, onChange }) {
  return (
    <button
      onClick={onChange}
      className={`
        w-20 h-10 rounded-full relative transition-all duration-500
        backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.35)]
        ${checked ? "bg-[#00e1ff40]" : "bg-[#ffffff40]"}
        border border-white/20
      `}
    >
      <span
        className={`
          absolute top-1 left-1 w-8 h-8 rounded-full
          transition-all duration-500
          backdrop-blur-xl
          ${
            checked
              ? "bg-white/70 shadow-[0_0_12px_#00e1ff]"
              : "bg-blue-600 shadow-[0_0_10px_#00c8ff]"
          }
          ${checked ? "translate-x-10" : ""}
        `}
      ></span>

      {/* Glow Backlight */}
      <span
        className={`
          absolute inset-0 rounded-full blur-xl transition-opacity duration-500
          ${checked ? "bg-[#00e1ff80] opacity-100" : "opacity-0"}
        `}
      ></span>
    </button>
  );
}
