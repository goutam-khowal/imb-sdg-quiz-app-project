import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const scrollToFacts = () => {
    document.getElementById("facts")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-blue-600 to-purple-700"></div>
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Zero
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Hunger
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            End hunger, achieve food security and improved nutrition, and
            promote sustainable agriculture
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToFacts}
              className="group bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Explore Facts</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("quiz")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Take Quiz
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
