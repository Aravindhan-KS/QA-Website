import React from 'react';
import articles from '../data/articles.json';

const Articles = () => {
  const getCategoryColor = (category) => {
    const colors = {
      'Culture': 'bg-purple-900 text-purple-200',
      'Tips & Tricks': 'bg-blue-900 text-blue-200',
      'Technology': 'bg-green-900 text-green-200',
      'Education': 'bg-orange-900 text-orange-200',
      'Personalities': 'bg-pink-900 text-pink-200',
      'Self-Improvement': 'bg-teal-900 text-teal-200'
    };
    return colors[category] || 'bg-gray-700 text-gray-200';
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen bg-dark-bg py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark-text mb-4">Articles</h1>
          <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto">
            Dive deep into the world of knowledge with our insightful articles. 
            From quiz strategies to educational insights, discover content that enhances your learning journey.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <div className="bg-dark-card rounded-lg border border-dark-border overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-accent-cyan text-black">
                    Featured
                  </span>
                  <span className={`ml-2 px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(articles[0].category)}`}>
                    {articles[0].category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-dark-text mb-4">{articles[0].title}</h2>
                <p className="text-dark-text-secondary mb-6">{articles[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-sm text-dark-text-secondary">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {articles[0].author}
                    </div>
                    <div className="flex items-center text-sm text-dark-text-secondary">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {formatDate(articles[0].date)}
                    </div>
                    <div className="flex items-center text-sm text-dark-text-secondary">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {articles[0].readTime}
                    </div>
                  </div>
                  <button className="bg-accent-blue text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article) => (
            <article key={article.id} className="bg-dark-card rounded-lg border border-dark-border overflow-hidden hover:border-accent-blue transition-all duration-300">
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dark-text mb-3 line-clamp-2">{article.title}</h3>
                <p className="text-dark-text-secondary mb-4 line-clamp-3">{article.excerpt}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-dark-text-secondary">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {article.author}
                  </div>
                  <div className="flex items-center text-sm text-dark-text-secondary">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {article.readTime}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-dark-text-secondary">{formatDate(article.date)}</span>
                  <button className="text-accent-cyan font-medium hover:text-cyan-400 transition-colors duration-200">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-accent-blue text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200">
            Load More Articles
          </button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <div className="bg-dark-card rounded-lg border border-dark-border p-8 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-dark-text mb-4">Stay Informed</h2>
            <p className="text-dark-text-secondary mb-6">
              Subscribe to our newsletter and get the latest articles, quiz tips, and event updates 
              delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-dark-border rounded-lg bg-dark-surface text-dark-text placeholder-dark-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
              />
              <button className="bg-accent-cyan text-black px-6 py-3 rounded-lg hover:bg-cyan-400 transition-colors duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
