import React from 'react';
import EventCard from '../components/EventCard';

const Events = () => {
  // Mock events data
  const events = [
    {
      id: 1,
      title: "Tech Quiz Championship 2025",
      description: "Join us for the biggest tech quiz of the year! Test your knowledge on the latest developments in technology, programming, and innovation. Exciting prizes await the winners!",
      date: "2025-03-15",
      time: "10:00 AM",
      venue: "Main Auditorium, CEG",
      poster: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "General Knowledge Extravaganza",
      description: "A comprehensive quiz covering history, geography, current affairs, sports, and entertainment. Perfect for those who love to know a bit about everything!",
      date: "2025-02-28",
      time: "2:00 PM",
      venue: "Seminar Hall 1, CEG",
      poster: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Science & Innovation Quiz",
      description: "Explore the fascinating world of science and innovation. From breakthrough discoveries to cutting-edge research, test your scientific knowledge.",
      date: "2025-02-14",
      time: "11:00 AM",
      venue: "Physics Auditorium, CEG",
      poster: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Literature & Arts Quiz",
      description: "Dive deep into the world of literature, arts, and culture. From classic novels to contemporary poetry, from Renaissance art to modern cinema.",
      date: "2025-01-30",
      time: "3:00 PM",
      venue: "English Department Hall, CEG",
      poster: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Business & Economics Quiz",
      description: "Test your knowledge of business strategies, economic theories, market trends, and entrepreneurship. Great for management and economics enthusiasts.",
      date: "2025-01-15",
      time: "1:00 PM",
      venue: "Management Studies Block, CEG",
      poster: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Sports Quiz Bonanza",
      description: "From Olympic records to cricket statistics, from football legends to tennis champions. The ultimate quiz for sports enthusiasts!",
      date: "2024-12-20",
      time: "4:00 PM",
      venue: "Sports Complex, CEG",
      poster: "/api/placeholder/400/250"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-bg py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark-text mb-4">Events</h1>
          <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto">
            Join us for exciting quiz competitions and knowledge-sharing events. 
            From tech challenges to general knowledge battles, there's something for everyone!
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-dark-card rounded-lg border border-dark-border p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-dark-text mb-4">Want to Participate?</h2>
            <p className="text-dark-text-secondary mb-6">
              Stay updated with our latest events and never miss a quiz competition. 
              Follow us on social media and join our mailing list.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:quizzersanonymous@gmail.com"
                className="bg-accent-blue text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>Subscribe to Updates</span>
              </a>
              <a 
                href="https://instagram.com/quizzersanonymous"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-accent-cyan text-accent-cyan px-6 py-3 rounded-lg hover:bg-accent-cyan hover:text-black transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Follow Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;