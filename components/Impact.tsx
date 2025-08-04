import { Globe, Target, Users } from "lucide-react";

export const Impact = () => {
  return (
    <section
      id="impact"
      className="py-20 bg-gradient-to-br from-green-600 via-blue-600 to-purple-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-16">
          <h2 className="text-4xl font-bold mb-4">Making an Impact</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Together, we can create a world where everyone has access to
            nutritious food
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center text-white">
            <Target className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
            <h3 className="text-2xl font-bold mb-4">Our Goal</h3>
            <p className="text-gray-200">
              End hunger and ensure access by all people to safe, nutritious and
              sufficient food all year round
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center text-white">
            <Users className="w-12 h-12 mx-auto mb-4 text-green-300" />
            <h3 className="text-2xl font-bold mb-4">Take Action</h3>
            <p className="text-gray-200">
              Support local food banks, advocate for policy changes, and promote
              sustainable agriculture
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center text-white">
            <Globe className="w-12 h-12 mx-auto mb-4 text-blue-300" />
            <h3 className="text-2xl font-bold mb-4">Global Impact</h3>
            <p className="text-gray-200">
              Join millions worldwide working toward a future where no one goes
              to bed hungry
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
