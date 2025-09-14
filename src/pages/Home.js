import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dark-surface to-dark-bg text-dark-text py-20">
        <div className="absolute inset-0 bg-grain opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-accent-cyan">Quizzers Anonymous</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-dark-text-secondary max-w-3xl mx-auto">
            The official quiz club of College of Engineering Guindy, where curiosity meets competition 
            and knowledge knows no bounds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/events" 
              className="bg-accent-cyan text-dark-bg px-8 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-colors duration-200"
            >
              Explore Events
            </a>
            <a 
              href="/team" 
              className="border-2 border-accent-blue text-accent-blue px-8 py-3 rounded-lg font-semibold hover:bg-accent-blue hover:text-white transition-colors duration-200"
            >
              Meet the Team
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-dark-text mb-6">About Quizzers Anonymous</h2>
              <p className="text-dark-text-secondary mb-4">
                Founded as the premier quiz club of College of Engineering Guindy, Anna University, 
                Quizzers Anonymous has been fostering a culture of learning and intellectual curiosity 
                for years. We believe that questioning is the beginning of wisdom.
              </p>
              <p className="text-dark-text-secondary mb-6">
                Our club organizes regular quiz competitions, knowledge-sharing sessions, and hosts 
                some of the most prestigious quiz events in Chennai. From literature to science, 
                sports to entertainment, we cover it all.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-dark-card rounded-lg border border-dark-border">
                  <div className="text-2xl font-bold text-accent-cyan">50+</div>
                  <div className="text-sm text-dark-text-secondary">Events Conducted</div>
                </div>
                <div className="text-center p-4 bg-dark-card rounded-lg border border-dark-border">
                  <div className="text-2xl font-bold text-accent-cyan">1000+</div>
                  <div className="text-sm text-dark-text-secondary">Participants</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/api/placeholder/500/400"
                alt="Quiz event"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-grain opacity-5 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-16 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-text mb-4">Follow Our Journey</h2>
            <p className="text-dark-text-secondary max-w-2xl mx-auto">
              Stay updated with our latest events, achievements, and memorable moments. 
              Follow us on Instagram for daily updates and behind-the-scenes content.
            </p>
          </div>
          
          {/* Instagram Feed Placeholder */}
          <div className="bg-dark-card rounded-lg shadow-md border border-dark-border p-8 text-center">
            <div className="mb-6">
              <svg className="w-16 h-16 text-pink-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <h3 className="text-xl font-semibold text-dark-text mb-2">@Quizzers Anonymous</h3>
              <p className="text-dark-text-secondary mb-6">
                Instagram feed will be embedded here. For now, follow us on Instagram to see our latest posts!
              </p>
            </div>
            
            {/* Mock Instagram Posts Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-dark-hover rounded-lg relative overflow-hidden border border-dark-border">
                  <img
                    src={`/api/placeholder/300/300`}
                    alt={`Instagram post ${i}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white opacity-0 hover:opacity-100" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            
            <a 
              href="https://www.instagram.com/cegquizclub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Follow on Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-text mb-4">Explore More</h2>
            <p className="text-dark-text-secondary max-w-2xl mx-auto">
              Discover our events, browse quiz sets, read articles, and get to know our amazing team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a 
              href="/events"
              className="group p-6 bg-dark-card rounded-lg hover:bg-dark-hover border border-dark-border transition-colors duration-200"
            >
              <div className="w-12 h-12 bg-accent-yellow rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark-text mb-2">Upcoming Events</h3>
              <p className="text-dark-text-secondary">Join our exciting quiz competitions and knowledge-sharing sessions.</p>
            </a>
            
            <a 
              href="/quiz-sets"
              className="group p-6 bg-dark-card rounded-lg hover:bg-dark-hover border border-dark-border transition-colors duration-200"
            >
              <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark-text mb-2">Quiz Sets</h3>
              <p className="text-dark-text-secondary">Download and practice with our curated collection of quiz questions.</p>
            </a>
            
            <a 
              href="/gallery"
              className="group p-6 bg-dark-card rounded-lg hover:bg-dark-hover border border-dark-border transition-colors duration-200"
            >
              <div className="w-12 h-12 bg-accent-green rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark-text mb-2">Gallery</h3>
              <p className="text-dark-text-secondary">Relive the memorable moments from our events and activities.</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;