export default function Banner() {
  return (
    <section className="w-full h-[70vh] flex flex-col items-center justify-center text-center 
    bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white px-6 relative overflow-hidden">

      {/* Animated floating circles */}
      <div className="absolute w-40 h-40 bg-white opacity-10 rounded-full top-10 left-10 animate-bounce"></div>
      <div className="absolute w-24 h-24 bg-white opacity-10 rounded-full bottom-10 right-10 animate-ping"></div>

      <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg animate-fade-in">
        Welcome to My E-Commerce Portfolio
      </h1>
      <p className="mt-4 text-lg md:text-xl max-w-2xl animate-fade-in delay-100">
        A colorful, modern, animated landing experience crafted with React & Tailwind.
      </p>

      <button className="mt-8 px-8 py-3 text-lg font-semibold bg-white text-purple-600 rounded-xl shadow-xl 
      hover:scale-105 transition-all duration-300">
        Explore Now
      </button>
    </section>
  );
}
