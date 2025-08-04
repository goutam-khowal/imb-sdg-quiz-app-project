import { useState } from "react";

export const Poll = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [votes, setVotes] = useState([45, 30, 15, 10]);

  const pollOptions = [
    "Sustainable agriculture and farming practices",
    "Food distribution and access programs",
    "Education and nutrition awareness",
    "Economic support for vulnerable communities",
  ];

  const totalVotes = votes.reduce((sum, vote) => sum + vote, 0);

  const handleVote = () => {
    if (selectedOption !== null) {
      const newVotes = [...votes];
      newVotes[selectedOption] += 1;
      setVotes(newVotes);
      setHasVoted(true);
    }
  };

  const resetPoll = () => {
    setSelectedOption(null);
    setHasVoted(false);
  };

  return (
    <section id="poll" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Community Poll
          </h2>
          <p className="text-xl text-gray-600">
            What do you think is the most effective approach to achieving Zero
            Hunger?
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          {!hasVoted ? (
            <>
              <div className="space-y-4 mb-8">
                {pollOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedOption(index)}
                    className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-300 ${
                      selectedOption === index
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${
                          selectedOption === index
                            ? "border-blue-500 bg-blue-500"
                            : "border-gray-300"
                        }`}
                      >
                        {selectedOption === index && (
                          <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                        )}
                      </div>
                      <span className="text-gray-800">{option}</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={handleVote}
                  disabled={selectedOption === null}
                  className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedOption !== null
                      ? "bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white transform hover:scale-105"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Submit Vote
                </button>
              </div>
            </>
          ) : (
            <>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Poll Results
              </h3>
              <div className="space-y-4 mb-8">
                {pollOptions.map((option, index) => {
                  const percentage = Math.round(
                    (votes[index] / totalVotes) * 100
                  );
                  return (
                    <div key={index} className="relative">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-800 font-medium">
                          {option}
                        </span>
                        <span className="text-gray-600 font-semibold">
                          {percentage}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-green-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="text-center">
                <p className="text-gray-600 mb-4">Total votes: {totalVotes}</p>
                <button
                  onClick={resetPoll}
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  Vote Again
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
