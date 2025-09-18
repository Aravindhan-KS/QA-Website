import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="bg-dark-card rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:shadow-dark-hover/50 transition-all duration-300 border border-dark-border">
      <div className="relative">
        <img
          src={event.poster || '/api/placeholder/400/250'}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        
        {/* Date Badge */}
        <div className="absolute top-4 right-4 bg-dark-bg bg-opacity-75 text-dark-text px-2 py-1 rounded text-sm">
          {event.date}
        </div>

        {/* Status Badge */}
        {event.eventStatus && (
          <div
            className={`absolute top-4 left-4 px-3 py-1 rounded text-xs font-semibold uppercase tracking-wide ${
              event.eventStatus === 'upcoming'
                ? 'bg-green-600 text-white'
                : 'bg-gray-600 text-white'
            }`}
          >
            {event.eventStatus}
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-dark-text mb-2">{event.title}</h3>
        <p className="text-dark-text-secondary mb-4 line-clamp-3">{event.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-dark-text-secondary">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {event.date} {event.time && `at ${event.time}`}
          </div>
          <div className="flex items-center text-sm text-dark-text-secondary">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {event.venue}
          </div>
        </div>
        
        {event.reportUrl && (
          <a
            href={event.reportUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center space-x-2 bg-accent-blue text-white py-2 px-4 rounded-md hover:bg-blue-500 transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            <span>Download Report</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default EventCard;
