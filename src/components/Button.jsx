export default function Button({ text, onClick }) {
  return (
    <button className="relative px-8 py-5 g4 text-s1 border-4 border-black rounded-4xl text-xl mt-4 cursor-pointer group overflow-hidden transition-all duration-500 ease-in-out hover:font-bold">
      {text}

      {/* Glow effect div */}
      <span className="absolute top-1/4 left-0 w-1/2 h-2/5 bg-white opacity-0 transition-all duration-500 group-hover:top-2.5 group-hover:left-[70%] group-hover:opacity-40 group-hover:rotate-90"></span>
      <span className="absolute top-1/4 right-[70%] w-1/2 h-2/5 bg-white opacity-0 transition-all duration-500 group-hover:top-2.5 group-hover:-left-[18%] group-hover:opacity-40 group-hover:rotate-90"></span>
    </button>
  );
}
