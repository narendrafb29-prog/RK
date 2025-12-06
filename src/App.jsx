import React from "react";
import Logo from "./components/Logo";
import Banner from "./components/Banner";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-gray-50">

      {/* Navbar */}
      <nav className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center fixed top-0 left-0 z-50">
        <Logo />
        <button className="px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:scale-105 transition">
          Contact
        </button>
      </nav>

      {/* Banner Section */}
      <div className="pt-20">
        <Banner />
      </div>

      {/* Product Section */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">

          {[
            { name: "Smart Watch", price: "$149" },
            { name: "DSLR Camera", price: "$499" },
            { name: "Gaming Laptop", price: "$899" },
            { name: "Wireless Speaker", price: "$99" },
            { name: "Fitness Tracker", price: "$79" },
            { name: "Headphones", price: "$129" },
          ].map((product, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition cursor-pointer"
            >
              <div className="w-full h-40 bg-gray-200 rounded-xl animate-pulse mb-4"></div>
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                View Product
              </button>
            </div>
          ))}

        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Hi! I'm <strong>Rahul Vishnoi</strong>, a web developer passionate about
          building modern, beautiful, and responsive ecommerce websites using
          React and Tailwind CSS.  
          My goal is to deliver stunning shopping experiences with clean design
          and strong functionality.
        </p>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Contact Me
        </h2>

        <form className="max-w-xl mx-auto grid gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border rounded-xl"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border rounded-xl"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-3 border rounded-xl"
            rows="5"
          ></textarea>

          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl shadow-md hover:scale-105 transition">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-900 text-white">
        © 2025 Rahul Vishnoi. All Rights Reserved.
      </footer>
    </div>
  );
}
