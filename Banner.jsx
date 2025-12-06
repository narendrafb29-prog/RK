import React from "react";

export default function Banner() {
  return (
    <div className="w-full h-[350px] rounded-2xl bg-gradient-to-r 
    from-purple-600 to-pink-500 flex items-center justify-center text-center 
    shadow-xl animate-fadeIn">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
        Welcome to My E-Commerce Portfolio
      </h2>
    </div>
  );
}
