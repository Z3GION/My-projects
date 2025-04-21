
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="w-full py-24 px-4 md:py-36 flex justify-center bg-gradient-to-br from-[#e5deff] via-[#F2FCE2] to-[#d3e4fd] rounded-3xl relative overflow-hidden shadow-lg animate-fade-in">
      <div className="z-10 max-w-3xl text-center mx-auto">
        <div className="inline-block mb-4 bg-white/30 px-6 py-2 rounded-full border border-white/40 shadow-glass backdrop-blur-xl animate-fade-pop">
          <span className="font-semibold text-blue-500 uppercase tracking-wider text-xs">Introducing</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-playfair font-semibold tracking-tight mb-6 bg-gradient-to-r from-indigo-700 via-primary to-pink-400 bg-clip-text text-transparent drop-shadow-lg animate-fade-pop">
          The Most Beautiful Frontend Starter
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Build your next project faster with a gorgeous, animated, production-ready template.
        </p>
        <Button className="text-lg px-8 py-5 bg-primary/90 hover:bg-primary transition-colors font-semibold rounded-full shadow-lg shadow-blue-200 animate-fade-pop uppercase">
          Get Started
        </Button>
      </div>
      <div className="absolute -top-28 -left-28 w-80 h-80 rounded-full bg-gradient-to-br from-[#9b87f588] via-[#e5deff88] to-[#33c3f088] blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-gradient-to-br from-[#ffe29f77] to-[#ff719a77] blur-2xl opacity-50"></div>
    </section>
  );
};

export default HeroSection;
