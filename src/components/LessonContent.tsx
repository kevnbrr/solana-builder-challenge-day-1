import React, { useState } from 'react';
import { FileText, HelpCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import type { Lesson } from '../types';

interface LessonContentProps {
  lesson: Lesson;
}

export function LessonContent({ lesson }: LessonContentProps) {
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const calculateScore = () => {
    if (!lesson.quiz) return 0;
    const correctAnswers = selectedAnswers.filter(
      (answer, index) => answer === lesson.quiz!.questions[index].correctAnswer
    ).length;
    return (correctAnswers / lesson.quiz.questions.length) * 100;
  };

  const handleSubmitQuiz = () => {
    setShowResults(true);
  };

  const handleRetakeQuiz = () => {
    setSelectedAnswers([]);
    setShowResults(false);
  };

  const renderQuiz = () => {
    if (!lesson.quiz) return null;

    return (
      <div className="mt-8 space-y-6">
        <h3 className="text-xl font-semibold">Knowledge Check</h3>
        {lesson.quiz.questions.map((question, questionIndex) => (
          <div key={question.id} className="bg-white p-6 rounded-lg shadow-sm">
            <p className="font-medium mb-4">{question.text}</p>
            <div className="space-y-2">
              {question.options.map((option, optionIndex) => (
                <label
                  key={optionIndex}
                  className={`flex items-center p-3 rounded-lg cursor-pointer ${
                    selectedAnswers[questionIndex] === optionIndex
                      ? 'bg-blue-50 border border-blue-200'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${questionIndex}`}
                    checked={selectedAnswers[questionIndex] === optionIndex}
                    onChange={() => handleAnswerSelect(questionIndex, optionIndex)}
                    className="mr-3"
                  />
                  {option}
                </label>
              ))}
            </div>
            {showResults && (
              <div className="mt-4 p-4 rounded-lg bg-gray-50">
                <p className={`font-medium ${
                  selectedAnswers[questionIndex] === question.correctAnswer
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}>
                  {selectedAnswers[questionIndex] === question.correctAnswer
                    ? '✓ Correct'
                    : '✗ Incorrect'}
                </p>
                <p className="text-gray-600 mt-2">{question.explanation}</p>
              </div>
            )}
          </div>
        ))}
        {!showResults ? (
          <button
            onClick={handleSubmitQuiz}
            className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Submit Answers
          </button>
        ) : (
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-gray-50">
              <p className="text-lg font-medium">
                Your Score: {calculateScore().toFixed(0)}%
              </p>
              <p className="text-gray-600">
                Passing Score: {lesson.quiz.passingScore}%
              </p>
            </div>
            <button
              onClick={handleRetakeQuiz}
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Retake Quiz
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{lesson.title}</h2>
        <span className="text-gray-500">
          {lesson.duration} mins
        </span>
      </div>
      
      {lesson.type === 'article' && (
        <div className="prose max-w-none">
          <ReactMarkdown>{lesson.content}</ReactMarkdown>
          {lesson.quiz && (
            <button
              onClick={() => setShowQuiz(!showQuiz)}
              className="mt-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {showQuiz ? 'Hide Quiz' : 'Take Quiz'}
            </button>
          )}
        </div>
      )}
      
      {showQuiz && lesson.quiz && renderQuiz()}
    </div>
  );
}