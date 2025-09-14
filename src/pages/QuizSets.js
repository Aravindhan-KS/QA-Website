import React from 'react';

const QuizSets = () => {
  // Mock quiz sets data
  const quizSets = [
    {
      id: 1,
      title: "Technology & Innovation Quiz",
      description: "150 questions covering AI, blockchain, cybersecurity, and emerging technologies",
      category: "Technology",
      questions: 150,
      difficulty: "Medium",
      downloadUrl: "#"
    },
    {
      id: 2,
      title: "General Knowledge Master Set",
      description: "Comprehensive collection of 200 questions from various domains",
      category: "General Knowledge",
      questions: 200,
      difficulty: "Mixed",
      downloadUrl: "#"
    },
    {
      id: 3,
      title: "Science & Discovery Quiz",
      description: "Explore the wonders of science with 120 carefully curated questions",
      category: "Science",
      questions: 120,
      difficulty: "Hard",
      downloadUrl: "#"
    },
    {
      id: 4,
      title: "Business & Economics Set",
      description: "Test your knowledge of business strategies and economic theories",
      category: "Business",
      questions: 100,
      difficulty: "Medium",
      downloadUrl: "#"
    },
    {
      id: 5,
      title: "Literature & Arts Collection",
      description: "Journey through the world of literature, poetry, and fine arts",
      category: "Arts & Literature",
      questions: 130,
      difficulty: "Hard",
      downloadUrl: "#"
    },
    {
      id: 6,
      title: "Sports Trivia Championship",
      description: "From Olympic records to current sports events and legends",
      category: "Sports",
      questions: 180,
      difficulty: "Easy",
      downloadUrl: "#"
    },
    {
      id: 7,
      title: "History & Geography Quiz",
      description: "Explore civilizations, wars, discoveries, and geographical wonders",
      category: "History & Geography",
      questions: 160,
      difficulty: "Medium",
      downloadUrl: "#"
    },
    {
      id: 8,
      title: "Entertainment & Pop Culture",
      description: "Movies, music, celebrities, and trending topics from around the world",
      category: "Entertainment",
      questions: 140,
      difficulty: "Easy",
      downloadUrl: "#"
    },
    {
      id: 9,
      title: "Current Affairs 2024-2025",
      description: "Stay updated with the latest happenings around the globe",
      category: "Current Affairs",
      questions: 110,
      difficulty: "Medium",
      downloadUrl: "#"
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      case 'Mixed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

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

  const handleDownload = (quizSet) => {
    // Placeholder for download functionality
    alert(`Downloading ${quizSet.title} quiz set...`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Quiz Sets</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Download our carefully curated quiz sets to practice and improve your knowledge. 
            Each set contains high-quality questions across various difficulty levels.
          </p>
        </div>

        {/* Stats Banner */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">9</div>
            <div className="text-gray-600">Quiz Sets</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">1,390</div>
            <div className="text-gray-600">Total Questions</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">8</div>
            <div className="text-gray-600">Categories</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">Free</div>
            <div className="text-gray-600">Downloads</div>
          </div>
        </div>

        {/* Quiz Sets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quizSets.map((quizSet) => (
            <div key={quizSet.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Header with category color */}
              <div className={`${getCategoryColor(quizSet.category)} p-4`}>
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">{quizSet.category}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(quizSet.difficulty)}`}>
                    {quizSet.difficulty}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{quizSet.title}</h3>
                <p className="text-gray-600 mb-4">{quizSet.description}</p>
                
                {/* Stats */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {quizSet.questions} Questions
                    </div>
                  </div>
                </div>
                
                {/* Download Button */}
                <button
                  onClick={() => handleDownload(quizSet)}
                  className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  </svg>
                  <span>Download Quiz Set</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Custom Quiz Sets?</h2>
            <p className="text-gray-600 mb-6">
              Looking for quiz questions on specific topics or difficulty levels? 
              Get in touch with us, and we'll create custom quiz sets tailored to your needs.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizSets;