import { Globe, Heart, Utensils } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Utensils className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">Zero Hunger</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Working towards SDG Goal 2: End hunger, achieve food security and
              improved nutrition, and promote sustainable agriculture.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                <Globe className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                <Heart className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("home")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("facts")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Facts
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("quiz")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Quiz
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("poll")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Poll
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  UN SDG Goals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  World Food Programme
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAO
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Take Action
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2025 Zero Hunger Initiative. Together for a world without
            hunger.
          </p>
        </div>
      </div>
    </footer>
  );
};
