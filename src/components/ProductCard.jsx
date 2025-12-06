import React from "react";

export default function ProductCard({ product, onView, onAdd }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl transition-transform transform hover:-translate-y-1">
      <img src={product.img} alt={product.name} className="w-full h-40 object-contain" />
      <h3 className="text-xl font-semibold mt-3">{product.name}</h3>

      <div className="flex items-center mt-1">
        {Array(5).fill().map((_, i) => (
          <span key={i} className={`text-yellow-400 ${i < product.rating ? "" : "opacity-30"}`}>★</span>
        ))}
        <span className="ml-2 text-gray-500 text-sm">({product.reviews?.length || 0})</span>
      </div>

      <p className="text-gray-600 text-sm mt-2 h-12">{product.description}</p>

      <div className="flex items-center justify-between mt-3">
        <p className="text-gray-800 font-bold">{product.price}</p>
        <div className="flex space-x-2">
          <button onClick={() => onView(product)} className="px-3 py-1 bg-gray-100 rounded-md hover:bg-gray-200">View</button>
          <button onClick={() => onAdd(product)} className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-md hover:scale-105 transition">Add</button>
        </div>
      </div>
    </div>
  );
}
