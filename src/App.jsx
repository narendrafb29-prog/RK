import React, { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const products = [
    { id: 1, name: "Premium Headphones", price: "$199", image: "https://via.placeholder.com/300?text=Headphones" },
    { id: 2, name: "Smart Watch", price: "$149", image: "https://via.placeholder.com/300?text=Smart+Watch" },
    { id: 3, name: "DSLR Camera", price: "$499", image: "https://via.placeholder.com/300?text=Camera" },
    { id: 4, name: "Gaming Laptop", price: "$899", image: "https://via.placeholder.com/300?text=Laptop" },
    { id: 5, name: "Wireless Speaker", price: "$99", image: "https://via.placeholder.com/300?text=Speaker" },
    { id: 6, name: "Fitness Tracker", price: "$79", image: "https://via.placeholder.com/300?text=Tracker" },
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-500">

        {/* Header */}
        <header className="p-6 shadow bg-white dark:bg-gray-800 flex justify-between items-center sticky top-0 z-50">
          <h1 className="text-3xl font-bold">MyShop</h1>
          <nav className="space-x-6 text-lg">
            <a href="#products" className="hover:text-blue-500 transition">Products</a>
            <a href="#about" className="hover:text-blue-500 transition">About</a>
            <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
          </nav>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 px-3 py-1 border rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </header>

        {/* Hero Section */}
        <section className="text-center py-24 bg-gradient-to-b from-white dark:from-gray-900 to-gray-100 dark:to-gray-800 transition-colors">
          <h2 className="text-5xl font-bold mb-4">Modern Ecommerce Portfolio</h2>
          <p className="text-xl max-w-2xl mx-auto">Showcase your products beautifully and professionally.</p>
        </section>

        {/* Products Section */}
        <section id="products" className="py-16 px-6">
          <h3 className="text-3xl font-bold mb-12 text-center">Featured Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {products.map(product => (
              <div
                key={product.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow p-4 hover:shadow-xl transform hover:scale-105 transition duration-300"
              >
                <img src={product.image} alt={product.name} className="w-full rounded-xl mb-4" />
                <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{product.price}</p>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                  View Product
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-6 bg-gray-100 dark:bg-gray-700 transition-colors">
          <h3 className="text-3xl font-bold mb-6 text-center">About Me</h3>
          <p className="max-w-3xl mx-auto text-center text-lg">
            Hi! I'm a passionate web developer building modern, responsive, and beautiful ecommerce portfolios with React and TailwindCSS. My goal is to create a seamless user experience and showcase products in the best light.
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-6">
          <h3 className="text-3xl font-bold mb-6 text-center">Contact Me</h3>
          <form className="max-w-xl mx-auto flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
            ></textarea>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center bg-gray-200 dark:bg-gray-800 transition-colors mt-12">
          <p>© 2025 MyShop. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}
