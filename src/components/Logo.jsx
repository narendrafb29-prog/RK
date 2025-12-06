export default function Logo() {
  return (
    <div className="flex items-center gap-2 animate-pulse">
      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
        <span className="text-white font-extrabold text-2xl">B</span>
      </div>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
        Rahul Vishnoi
      </h1>
    </div>
  );
}
