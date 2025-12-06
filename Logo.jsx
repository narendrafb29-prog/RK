import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 
      text-white font-bold text-3xl w-12 h-12 rounded-xl 
      flex items-center justify-center animate-pulse shadow-lg">
        B
      </div>

      <h1 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
        Rahul Vishnoi
      </h1>
    </div>
  );
}
