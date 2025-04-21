
import { Award, Smile, Rocket, Star } from "lucide-react";

const features = [
  {
    icon: <Rocket className="w-7 h-7 text-primary" />,
    title: "Lightning Fast",
    description: "Optimized builds with top performance.",
    color: "from-[#9b87f5]/95 to-[#33c3f0]/95"
  },
  {
    icon: <Star className="w-7 h-7 text-yellow-500" />,
    title: "Stunning Design",
    description: "Modern gradients, glass cards, and effects.",
    color: "from-[#ffe29f]/90 to-[#ff719a]/90"
  },
  {
    icon: <Smile className="w-7 h-7 text-green-500" />,
    title: "User Friendly",
    description: "Responsive layouts and smooth animations.",
    color: "from-[#e5deff]/80 to-[#a1ecfe]/80"
  },
  {
    icon: <Award className="w-7 h-7 text-pink-400" />,
    title: "Ready to Launch",
    description: "Production configured out of the box.",
    color: "from-[#fec6a1]/90 to-[#ffdee2]/90"
  }
];

const FeatureCards = () => (
  <section className="w-full max-w-6xl mx-auto px-2 md:px-0 mt-16 flex flex-col gap-10 animate-fade-in">
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
      {features.map((f, i) => (
        <div
          key={f.title}
          className={`
            flex flex-col items-center justify-center p-8 h-64 glass-morphism rounded-2xl shadow-glass
            bg-gradient-to-br ${f.color} hover:scale-105 transition-transform duration-300 cursor-pointer
            backdrop-blur-lg border border-white/30 relative animate-fade-pop
          `}
        >
          <div className="mb-4 p-3 bg-white/70 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center">
            {f.icon}
          </div>
          <h3 className="font-semibold text-2xl mb-2 font-playfair text-gray-800">{f.title}</h3>
          <p className="text-gray-700 text-base text-center">{f.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeatureCards;
