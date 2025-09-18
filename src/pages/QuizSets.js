import React from 'react';
import quizSets from '../data/quizSets.json';

const QuizSets = () => {
  const getCategoryColor = (category) => {
    const colors = {
      'Technology': 'bg-purple-500',
      'General Knowledge': 'bg-blue-500',
      'Science': 'bg-green-500',
      'Business': 'bg-orange-500',
      'Arts & Literature': 'bg-pink-500',
      'Sports': 'bg-red-500',
      'History & Geography': 'bg-indigo-500',
      'Entertainment': 'bg-yellow-500',
      'Current Affairs': 'bg-teal-500'
    };
    return colors[category] || 'bg-gray-500';
  };

  const totalQuestions = quizSets.reduce((sum, set) => sum + set.questions, 0);
  const categories = [...new Set(quizSets.map(set => set.category))].length;

  return (
    <div className="min-h-screen bg-dark-bg py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark-text mb-4">Quiz Sets</h1>
          <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto">
           Check out some of our quiz sets! Some from our Instagram quizzes and some of our sets used in events!
          </p>
        </div>

        {/* Stats Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-dark-card rounded-lg border border-dark-border p-6 text-center">
            <div className="text-3xl font-bold text-accent-blue mb-2">{quizSets.length}</div>
            <div className="text-dark-text-secondary">Quiz Sets</div>
          </div>
          <div className="bg-dark-card rounded-lg border border-dark-border p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">{totalQuestions}</div>
            <div className="text-dark-text-secondary">Total Questions</div>
          </div>
          <div className="bg-dark-card rounded-lg border border-dark-border p-6 text-center">
            <div className="text-3xl font-bold text-accent-green mb-2">{categories}</div>
            <div className="text-dark-text-secondary">Categories</div>
          </div>
        </div>

        {/* Quiz Sets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quizSets.map((quizSet) => (
            <div key={quizSet.id} className="bg-dark-card rounded-lg border border-dark-border overflow-hidden hover:border-accent-blue transition-all duration-300">
              
              {/* Header with category color */}
              <div className={`${getCategoryColor(quizSet.category)} p-4`}>
                <span className="text-white font-medium">{quizSet.category}</span>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dark-text mb-3">{quizSet.title}</h3>
                <p className="text-dark-text-secondary mb-4">{quizSet.description}</p>
                
                {/* Stats */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-sm text-dark-text-secondary">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {quizSet.questions} Questions
                  </div>
                </div>
                
                {/* Redirect Button */}
                <a
                  href={quizSet.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-accent-blue text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  </svg>
                  <span>Check it out</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      
      </div>
    </div>
  );
};

export default QuizSets;
