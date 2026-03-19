import { useState } from 'react';
import { motion } from 'motion/react';
import { quizzes, flashcards } from '../data/study';
import { BookOpen, CheckCircle, XCircle, RefreshCw } from 'lucide-react';

export default function Study() {
  const [activeTab, setActiveTab] = useState<'quiz' | 'flashcards'>('quiz');
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    setShowExplanation(true);
    if (index === quizzes[currentQuizIndex].correctAnswerIndex) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuizIndex < quizzes.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuizIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizFinished(false);
  };

  const nextCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentCardIndex((prev) => (prev + 1) % flashcards.length);
    }, 150);
  };

  return (
    <div className="min-h-screen bg-black text-zinc-300 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-6 uppercase">
            Study <span className="text-emerald-500">System</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Test your knowledge and review key concepts with interactive tools.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-zinc-900 p-1 rounded-full inline-flex border border-white/10">
            <button
              onClick={() => setActiveTab('quiz')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'quiz' ? 'bg-emerald-600 text-white' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Knowledge Check
            </button>
            <button
              onClick={() => setActiveTab('flashcards')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'flashcards' ? 'bg-emerald-600 text-white' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Flashcards
            </button>
          </div>
        </div>

        {/* Quiz Section */}
        {activeTab === 'quiz' && (
          <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 md:p-12">
            {!quizFinished ? (
              <motion.div
                key={currentQuizIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="flex justify-between items-center mb-8">
                  <span className="text-emerald-500 font-mono text-sm uppercase tracking-widest">
                    Question {currentQuizIndex + 1} of {quizzes.length}
                  </span>
                  <span className="text-zinc-500 font-mono text-sm">Score: {score}</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-tight">
                  {quizzes[currentQuizIndex].question}
                </h2>

                <div className="space-y-4 mb-8">
                  {quizzes[currentQuizIndex].options.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    const isCorrect = index === quizzes[currentQuizIndex].correctAnswerIndex;
                    const showStatus = selectedAnswer !== null;
                    
                    let btnClass = "w-full text-left p-4 rounded-xl border transition-all duration-200 flex justify-between items-center ";
                    
                    if (!showStatus) {
                      btnClass += "border-white/10 bg-black hover:border-emerald-500/50 hover:bg-white/5 text-zinc-300";
                    } else if (isCorrect) {
                      btnClass += "border-emerald-500 bg-emerald-500/10 text-emerald-400";
                    } else if (isSelected && !isCorrect) {
                      btnClass += "border-red-500 bg-red-500/10 text-red-400";
                    } else {
                      btnClass += "border-white/5 bg-black/50 text-zinc-600 opacity-50";
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        disabled={selectedAnswer !== null}
                        className={btnClass}
                      >
                        <span className="font-medium">{option}</span>
                        {showStatus && isCorrect && <CheckCircle className="w-5 h-5 text-emerald-500" />}
                        {showStatus && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-500" />}
                      </button>
                    );
                  })}
                </div>

                {showExplanation && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-emerald-950/30 border border-emerald-900/50 rounded-xl p-6 mb-8"
                  >
                    <h4 className="text-emerald-400 font-bold mb-2 uppercase tracking-wider text-sm">Explanation</h4>
                    <p className="text-emerald-100/80 text-sm leading-relaxed">
                      {quizzes[currentQuizIndex].explanation}
                    </p>
                  </motion.div>
                )}

                {selectedAnswer !== null && (
                  <button
                    onClick={nextQuestion}
                    className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-zinc-200 transition-colors"
                  >
                    {currentQuizIndex < quizzes.length - 1 ? 'Next Question' : 'Finish Quiz'}
                  </button>
                )}
              </motion.div>
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-emerald-500/20 mb-8">
                  <BookOpen className="w-12 h-12 text-emerald-500" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">Quiz Complete</h2>
                <p className="text-xl text-zinc-400 mb-8">
                  You scored <span className="text-emerald-400 font-bold">{score}</span> out of {quizzes.length}
                </p>
                <button
                  onClick={resetQuiz}
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-medium transition-colors"
                >
                  <RefreshCw className="w-5 h-5" /> Try Again
                </button>
              </div>
            )}
          </div>
        )}

        {/* Flashcards Section */}
        {activeTab === 'flashcards' && (
          <div className="flex flex-col items-center">
            <div className="mb-8 text-emerald-500 font-mono text-sm uppercase tracking-widest">
              Card {currentCardIndex + 1} of {flashcards.length}
            </div>
            
            <div 
              className="relative w-full max-w-2xl h-96 perspective-1000 cursor-pointer group"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <motion.div
                className="w-full h-full relative preserve-3d transition-transform duration-500"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
              >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden bg-zinc-900 border border-white/10 rounded-3xl p-12 flex flex-col items-center justify-center text-center shadow-2xl group-hover:border-emerald-500/30 transition-colors">
                  <span className="absolute top-6 left-6 text-xs font-mono text-zinc-500 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">
                    {flashcards[currentCardIndex].category}
                  </span>
                  <h3 className="text-4xl font-bold text-white leading-tight">
                    {flashcards[currentCardIndex].front}
                  </h3>
                  <p className="absolute bottom-6 text-zinc-500 text-sm flex items-center gap-2">
                    <RefreshCw className="w-4 h-4" /> Click to flip
                  </p>
                </div>

                {/* Back */}
                <div 
                  className="absolute inset-0 backface-hidden bg-emerald-950/40 border border-emerald-500/30 rounded-3xl p-12 flex flex-col items-center justify-center text-center shadow-2xl"
                  style={{ transform: 'rotateY(180deg)' }}
                >
                  <p className="text-xl text-emerald-50 leading-relaxed font-light">
                    {flashcards[currentCardIndex].back}
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="mt-12 flex gap-4">
              <button
                onClick={nextCard}
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium transition-colors border border-white/10"
              >
                Next Card
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
