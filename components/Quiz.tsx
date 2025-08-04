import { Award, CheckCircle, X } from "lucide-react";
import { useState } from "react";

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = [
    {
      question: "What is the main goal of SDG 2: Zero Hunger?",
      options: [
        "End poverty everywhere",
        "End hunger, achieve food security and improved nutrition",
        "Ensure quality education for all",
        "Promote clean water and sanitation",
      ],
      correct: 1,
    },
    {
      question: "How many people faced acute food insecurity in 2023?",
      options: [
        "About 200 million",
        "About 500 million",
        "About 735 million",
        "About 1 billion",
      ],
      correct: 2,
    },
    {
      question:
        "What percentage increase in food production is needed by 2050?",
      options: ["50%", "60%", "70%", "80%"],
      correct: 2,
    },
    {
      question: "Which region has the highest prevalence of undernourishment?",
      options: ["Asia", "Africa", "Latin America", "Europe"],
      correct: 1,
    },
  ];

  const handleAnswerSelect = (answerIndex: any) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }

    setShowResult(true);
    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setShowResult(false);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    return (
      <section id="quiz" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quiz Completed!
            </h2>
            <div className="text-6xl font-bold text-green-600 mb-4">
              {score}/{questions.length}
            </div>
            <p className="text-xl text-gray-600 mb-8">
              {score === questions.length
                ? "Perfect! You're well-informed about Zero Hunger!"
                : score >= questions.length * 0.7
                ? "Great job! You have good knowledge about this topic."
                : "Keep learning! Every step toward understanding helps fight hunger."}
            </p>
            <button
              onClick={resetQuiz}
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Test Your Knowledge
          </h2>
          <div className="flex justify-center items-center space-x-2 mb-8">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index <= currentQuestion ? "bg-green-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="mb-6">
            <span className="text-sm font-medium text-gray-500">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <h3 className="text-2xl font-bold text-gray-900 mt-2">
              {questions[currentQuestion].question}
            </h3>
          </div>

          <div className="space-y-4 mb-8">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-300 ${
                  selectedAnswer === index
                    ? showResult
                      ? index === questions[currentQuestion].correct
                        ? "border-green-500 bg-green-50 text-green-800"
                        : "border-red-500 bg-red-50 text-red-800"
                      : "border-blue-500 bg-blue-50"
                    : showResult && index === questions[currentQuestion].correct
                    ? "border-green-500 bg-green-50 text-green-800"
                    : "border-gray-200 hover:border-gray-300"
                } ${
                  showResult
                    ? "cursor-not-allowed"
                    : "cursor-pointer hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {showResult && (
                    <>
                      {index === questions[currentQuestion].correct && (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      )}
                      {selectedAnswer === index &&
                        index !== questions[currentQuestion].correct && (
                          <X className="w-5 h-5 text-red-600" />
                        )}
                    </>
                  )}
                </div>
              </button>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Score: {score}/{questions.length}
            </div>
            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null || showResult}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedAnswer !== null && !showResult
                  ? "bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white transform hover:scale-105"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {currentQuestion + 1 === questions.length
                ? "Finish Quiz"
                : "Next Question"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
