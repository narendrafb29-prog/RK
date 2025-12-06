import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Logo from "./components/Logo";
import CartDrawer from "./components/CartDrawer";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import { useCart } from "./state/CartContext";

export default function App() {
  // initial product data
  const initialProducts = [
    {
      id: 1,
      name: "Smart Watch",
      price: "$149",
      img: "/products/watch.png",
      rating: 4,
      description: "Fitness tracking, heart rate monitor & Bluetooth connectivity.",
      reviews: []
    },
    {
      id: 2,
      name: "DSLR Camera",
      price: "$499",
      img: "/products/camera.png",
      rating: 5,
      description: "High-quality photography with 24MP lens and autofocus.",
      reviews: []
    },
    {
      id: 3,
      name: "Gaming Laptop",
      price: "$899",
      img: "/products/laptop.png",
      rating: 5,
      description: "RTX graphics, 16GB RAM, and RGB keyboard for gaming.",
      reviews: []
    },
    {
      id: 4,
      name: "Wireless Speaker",
      price: "$99",
      img: "/products/speaker.png",
      rating: 4,
      description: "Crystal clear audio, deep bass, and long battery life.",
      reviews: []
    }
  ];

  const [products, setProducts] = useState(initialProducts);
  const [cartOpen, setCartOpen] = useState(false);
  const { cart } = useCart();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 p-5">
      <header className="flex justify-between items-center bg-white shadow-lg rounded-xl p-4">
        <div className="flex items-center gap-6">
          <Logo />
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="text-gray-700 hover:text-purple-600">Home</Link>
            <Link to="/" className="text-gray-700 hover:text-purple-600">Products</Link>
            <Link to="#about" className="text-gray-700 hover:text-purple-600">About</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={() => setCartOpen(true)} className="relative">
            <span className="px-3 py-2 bg-white rounded shadow">Cart</span>
            {cart.length > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center">{cart.reduce((s,p)=> s + p.qty,0)}</span>}
          </button>
        </div>
      </header>

      <main className="mt-6">
        <Routes>
          <Route path="/" element={<Home products={products} setProducts={setProducts} />} />
          <Route path="/product/:id" element={<ProductDetails products={products} />} />
        </Routes>
      </main>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      <footer className="text-center mt-10 text-gray-600">
        © 2025 Rahul Vishnoi — E-Commerce Portfolio
      </footer>
    </div>
  );
}
